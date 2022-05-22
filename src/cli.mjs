// CLI tool to generate json files for mGBA save games.

import { readdirSync, statSync, readFileSync, writeFileSync } from "fs"
import path, { join } from "path"
import PNGReader from "./pngjs/PNGReader.js";

const SAVES_PATH = '/home/octorock/save_games';

const structs = JSON.parse(readFileSync(new URL('./structs.json', import.meta.url)));


const getAllFiles = function (dirPath, arrayOfFiles) {
    const files = readdirSync(dirPath)


    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
        if (statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(join(dirPath, "/", file))
        }
    })

    return arrayOfFiles
}


console.log('Generating jsons...')
let files = getAllFiles(SAVES_PATH);
for (const file of files) {
    readSaveState(file)
}

function readSaveState(path) {
    const buffer = readFileSync(path);
    var pngReader = new PNGReader(buffer);
    pngReader.parse(function (err, png, state) {
        if (err) throw err;
        // console.log('image is <' + png.width + ',' + png.height + '>');
        // console.log(png);
        // console.log(state);
        const lists = parseState(state);
        console.log(path)
        writeFileSync(path.replace('save_games', 'save_games_json').replace('.ss1', '.json'), JSON.stringify(lists))
    });
}


var globals = {};

var parseState = function (state) {
    //    0x19000 - 0x20FFF: IWRAM (0x03XXXXXX address space)
    //    0x21000 - 0x60FFF: WRAM (0x02XXXXXX address space)

    let dv = new DataView(state.buffer);

    var getAddr = function (type, addr) {
        if (type == 3) {
            addr += 0x19000;
        } else if (type == 2) {
            addr += 0x21000;
        }
        return addr;
    }
    var convAddr = function (addr) {
        if (addr >= 0x3000000 && addr < 0x4000000) {
            addr += 0x19000 - 0x3000000;
        } else if (addr >= 0x2000000 && addr < 0x3000000) {
            addr += 0x21000 - 0x2000000;
        } else {
            console.error('Not mapped: ' + addr);
        }
        return addr;
    }


    class Reader {
        constructor(addr) {
            this.cursor = convAddr(addr);
            this.bitfield = 0;
            this.bitfieldRemaining = 0;
        }
    }

    var readStruct = function (reader, struct) {
        let res = {};
        //console.log(struct);
        for (let key in struct) {
            //console.log(key);
            res[key] = readVar(reader, struct[key]);
        }
        return res;
    }

    var readArray = function (reader, type, length) {
        let arr = []
        for (let i = 0; i < length; i++) {
            arr.push(readVar(reader, type));
        }
        return arr;
    }

    var readUnion = function (reader, union) {
        let res = {}
        let cursor = reader.cursor;
        for (let key in union) {
            reader.cursor = cursor;
            res[key] = readVar(reader, union[key]);
        }
        return res;
    }

    var readPointer = function (reader, type) {
        let addr = readVar(reader, 'u32');
        return {
            'addr': addr,
            'text': '(' + type + ') 0x' + addr.toString(16)
        };
    }

    var readBitfield = function (reader, length) {
        //console.log('> u' + length)
        if (reader.bitfieldRemaining == 0) {
            // Read the next byte
            //console.log('Read byte');
            reader.bitfield = readVar(reader, 'u8');
            reader.bitfieldRemaining = 8;
        }
        if (reader.bitfieldRemaining < length) {
            console.error(`Not enough bytes in bitfield remaining. Need ${length}, got ${reader.bitfieldRemaining}`);
            return;
        }

        reader.bitfieldRemaining -= length;
        let val = reader.bitfield & (2 ** length - 1);
        //console.log(reader.bitfield);
        reader.bitfield >>= length;
        //console.log(reader.bitfield);
        return val;

        // TODO somehow handle that all bits of the bytes need to be taken up by the bitfield?
    }

    var readVar = function (reader, type) {
        if (typeof type === 'object') {
            switch (type['type']) {
                case 'union':
                    return readUnion(reader, type['members'])
                case 'struct':
                    return readStruct(reader, type['members'])
                default:
                    console.error(`Unknown type ${type['type']}`)
            }
        }
        if (type.includes('*')) {
            return readPointer(reader, type);
        }
        if (type.includes('[')) {
            // Array
            let arr = type.split('[');
            type = arr[0];
            const length = parseInt(arr[1].substring(0, arr[1].length - 1));
            return readArray(reader, type, length);
        }
        if (type.includes(':')) {
            // Bitfield types
            return readBitfield(reader, parseInt(type.split(':')[1]));
        }
        switch (type) {
            case 'bool8':
            case 'u8':
                {
                    let val = dv.getUint8(reader.cursor, true);
                    reader.cursor += 1;
                    return val;
                }
            case 's8':
                {
                    let val = dv.getInt8(reader.cursor, true);
                    reader.cursor += 1;
                    return val;
                }
            case 'u16':
                {
                    let val = dv.getUint16(reader.cursor, true);
                    reader.cursor += 2;
                    return val;
                }
            case 's16':
                {
                    let val = dv.getInt16(reader.cursor, true);
                    reader.cursor += 2;
                    return val;
                }
            case 'u32':
                {
                    let val = dv.getUint32(reader.cursor, true);
                    reader.cursor += 4;
                    return val;
                }
            case 's32':
                {
                    let val = dv.getInt32(reader.cursor, true);
                    reader.cursor += 4;
                    return val;
                }
            case 'u1':
                return readBitfield(reader, 1);
            default:
                if (type in structs) {
                    return readVar(reader, structs[type]);
                } else {
                    console.error(`Unknown type ${type}`);
                }
        }
    }

    var printVar = function (addr, name, type) {
        let value = readVar(new Reader(addr), type);
        globals[name] = value;
        // console.log(name + '\n', value);
    }

    // Read all interesting states into the globals object.
    printVar(0x3003D70, 'gEntityLists', 'LinkedList[9]');

    let listAddr = 0x3003d70;
    let entityLists = globals['gEntityLists'];
    let lists = [];
    for (let i = 0; i < entityLists.length; i++) {
        lists.push([]);
        let first = entityLists[i].first.addr;
        if (first != 0 && first != listAddr + 8 * i) {
            // There are elements in this list
            let next = first;
            do {

                let entity;
                let kind = dv.getUint8(convAddr(next + 8));
                if (kind == 9) {
                    entity = readVar(new Reader(next), 'Manager');
                } else {
                    entity = readVar(new Reader(next), 'Entity');
                }
                lists[i].push(entity);
                next = entity.next.addr;
            } while (next != listAddr + 8 * i);
        }
    }

    //console.log(lists);
    return lists;



}
