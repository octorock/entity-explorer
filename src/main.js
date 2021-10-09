var PNGReader = require('./pngjs/PNGReader.js');
import { structs, unions } from './structs.js';
import { showLists } from './explorer.js';
var JSZip = require('jszip');

var reader = new FileReader();

reader.onload = function (event) {
    var bytes = event.target.result;
    var pngReader = new PNGReader(bytes);
    pngReader.parse(function (err, png, state) {
        if (err) throw err;
        console.log('image is <' + png.width + ',' + png.height + '>');
        console.log(png);
        console.log(state);
        parseState(state);
        drawOnCanvas(png);
    });


};

if (false) {
    // Load initial
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'tmc.ss3', true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function(e){
        if (this.status == 200){
            var pngReader = new PNGReader(this.response);
            pngReader.parse(function (err, png, state) {
                if (err) throw err;
                parseState(state);
                drawOnCanvas(png);
            });
        }
    };

    xhr.send();
}

var file = document.getElementById('file');
file.onchange = function (event) {
    if (file.files.length > 0) {
        if (file.files[0].name.endsWith('.State')) {
            // BizHawk zip file
            var zip = new JSZip();
            zip.loadAsync(file.files[0]).then(function(zip) {
                if (!'Core.bin' in zip.files) {
                    console.error('No Core.bin in save state. Not a BizHawk save?');
                } else {
                    zip.file('Core.bin').async('uint8array').then(function(state) {
                        // Remove the int describing how long the state is
                        parseState(state.slice(4));
                    });
                }
                if (!'Framebuffer.bmp' in zip.files) {
                    console.error('Missing screenshot in save state');
                } else {
                    zip.file('Framebuffer.bmp').async('blob').then(function(bmp) {
                        drawBmp(bmp);
                    });
                }
            });
        } else {
            // mGBA png file
            reader.readAsArrayBuffer(file.files[0]);
        }
    }
}

var drawOnCanvas = function (png) {
    var canvas = document.getElementById('screenshot');
    var ctx = canvas.getContext('2d');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    var i = 0;

    var width = Math.min(png.width, canvasWidth);
    var height = Math.min(png.height, canvasHeight);

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var colors = png.getPixel(x, y);
            canvasData.data[i++] = colors[0];
            canvasData.data[i++] = colors[1];
            canvasData.data[i++] = colors[2];
            canvasData.data[i++] = colors[3];
        }
        // move index to the next line
        var d = canvasWidth - width;
        if (d > 0) i += d * 4;
    }

    ctx.putImageData(canvasData, 0, 0);

}

var drawBmp = function(bmp) {
    var canvas = document.getElementById('screenshot');
    var ctx = canvas.getContext('2d');
    createImageBitmap(bmp).then(img => {
        ctx.drawImage(img, 0, 0);
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


    var readU8 = function (type, addr, name) {
        console.log(name + ': ' + state[getAddr(type, addr)]);
    }
    var readU16 = function (type, addr, name) {
        console.log(name + ': ' + dv.getUint16(getAddr(type, addr), true));
    }

    var readStruct = function(reader, struct) {
        let res = {};
        //console.log(struct);
        for (let key in struct) {
            //console.log(key);
            res[key] = readVar(reader, struct[key]);
        }
        return res;
    }

    var readArray = function(reader, type, length) {
        let arr = []
        for (let i = 0; i < length; i++) {
            arr.push(readVar(reader, type));
        }
        return arr;
    }

    var readUnion = function(reader, union) {
        let res = {}
        let cursor = reader.cursor;
        for (let key in union) {
            reader.cursor = cursor;
            res[key] = readVar(reader, union[key]);
        }
        return res;
    }

    var readPointer = function(reader, type) {
        let addr = readVar(reader, 'u32');
        return {
            'addr': addr,
            'text': '('+type+') 0x' + addr.toString(16)
        };
    }

    var readBitfield = function(reader, length) {
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
        let val = reader.bitfield & (2**length-1);
        //console.log(reader.bitfield);
        reader.bitfield >>= length;
        //console.log(reader.bitfield);
        return val;

        // TODO somehow handle that all bits of the bytes need to be taken up by the bitfield?
    }

    var readVar = function(reader, type) {
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
            length = parseInt(arr[1].substring(0, arr[1].length-1));
            return readArray(reader, type, length);
        }

        switch (type) {
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
            // Bitfield types
            case 'u1':
            case 'u2':
            case 'u3':
            case 'u4':
            case 'u5':
            case 'u6':
            case 'u7':
                return readBitfield(reader, parseInt(type.substring(1)));
                break;

            default:
                if (type in structs) {
                    return readStruct(reader, structs[type]);
                } else if (type in unions) {
                    return readUnion(reader, unions[type]);
                } else {
                    console.error(`Unknown type ${type}`);
                }
        }
    }

    var printVar = function(addr, name, type) {
        let value = readVar(new Reader(addr), type);
        globals[name] = value;
        console.log(name + ' >>> ', value);
    }

    readU8(3, 0x3DBC, 'gEntCount');
    readU8(2, 0x2AE8 + 0, 'gStats.walletType');
    readU8(2, 0x2AE8 + 1, 'gStats.heartPieces');
    readU8(2, 0x2AE8 + 2, 'gStats.health');
    readU8(2, 0x2AE8 + 3, 'gStats.maxHealth');
    readU16(2, 0x2AE8 + 0x18, 'gStats.rupees');

    printVar(0x3003DBC, 'gEntCount', 'u8');
    printVar(0x2002AE8, 'gStats', 'Stats');
    printVar(0x3000BF0, 'gRoomControls', 'RoomControls');
    printVar(0x3003D70, 'gEntityLists', 'LinkedList[9]');

    let listAddr = 0x3003d70;
    let entityLists = globals['gEntityLists'];
    let lists = [];
    for (let i = 0; i < entityLists.length; i++) {
        lists.push([]);
        let first = entityLists[i].first.addr;
        if (first != 0 && first != listAddr + 8*i) {
            // There are elements in this list
            let next = first;
            do {

                let entity;
                let kind = dv.getUint8(convAddr(next+8));
                if (kind == 9) {
                    entity = readVar(new Reader(next), 'Manager');
                } else {
                    entity = readVar(new Reader(next), 'Entity');
                }
                lists[i].push(entity);
                next = entity.next.addr;
            } while (next != listAddr + 8*i);
        }
    }

    console.log(lists);

    showLists(globals['gRoomControls'], lists);
}



// Set up tabs
let activeTab = 'explorer';

function switchTab(target) {
    console.log(target);
    let buttons = document.getElementsByClassName('tabbutton');
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        if (button.id != 'tabb-'+target) {
            button.classList.remove('active');
        } else {
            button.classList.add('active');
        }
    }
    document.getElementById(activeTab).classList.remove('active');
    document.getElementById(target).classList.add('active');
    activeTab = target;
}

function setUpTabs() {
    let buttons = document.getElementsByClassName('tabbutton');
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        console.log(button);
        if (!button.id.startsWith('tabb-')) {
            console.error(`Invalid tab button id: ${button.id}`);
        }
        let target = button.id.substring(5);
        button.onclick = () => {switchTab(target);};
    }
}
setUpTabs();