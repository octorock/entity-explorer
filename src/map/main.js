
var reader = new FileReader();
reader.onload = function (event) {
    var bytes = event.target.result;
    mapLoaded(bytes)
};

var file = document.getElementById('file');
file.onchange = function (event) {
    if (file.files.length > 0) {
        document.getElementById('symbol').innerHTML = 'Loading map...'
        reader.readAsText(file.files[0]);
    }
};


function mapLoaded(data) {
    let lines = data.split('\n');

    let index = 0
    let line = lines[index]
    while (!line.startsWith('rom')) {
        index += 1
        line = lines[index]
    }
    index += 1
    line = lines[index]
    while (!line.startsWith('rom')) {
        index += 1
        line = lines[index]
    }
    console.log(line)
    index += 1
    line = lines[index]
    // Parse declarations
    let current_file = 'UNKNOWN'

    symbols = []
    while (index < lines.length) {
        if (line.includes('debug_aranges')) {
            // Break at the start of potentiall debug info if built with -g
            break;
        } else if (line.startsWith(' .')) {
            // ignore this definition of filename
        } else if(line.startsWith('  ')) {
            let arr = line.split(/\W+/)
            //console.log(arr)
            if (arr.length == 3 && arr[2] != '') { // it is actually a symbol
                //console.log(parseInt(arr[1],16), arr[2])
                let addr = parseInt(arr[1], 16)
                if (symbols.length > 0) {
                    symbols[symbols.length-1].size = addr - symbols[symbols.length-1].addr
                }
                symbols.push(
                    {
                        addr: addr,
                        name: arr[2],
                        file: current_file,
                        size: 0
                    }
                )
            }
        } else if (!line.startsWith(' *')) {
            // this defines the name
            current_file = line.split('(')[0].trim()
            //console.log(current_file)
        }
        index += 1
        line = lines[index]
    }
    console.log(symbols)

    redrawCanvas();

}

let offset = 0x8000000
let symbols = []

let canvasWidth = 1024, canvasHeight = 1024;
let mode = 0;

function redrawCanvas() {
    hoverOverSymbols = false
    document.getElementById('symbol').innerHTML = 'Painting map...'
    setTimeout(() => {
        drawCanvas();
    }, 10);
}

let typeRegexes = {
    // audio
    '^data/sound/.*': 24,
    // graphics
    'data/gfx/sprite_gfx.o': 5, // TODO not correctly split up into sprites yet
    '^data/gfx/.*': 6,
    //'data/data_08132B30.o': 7, // TODO maybe not everything in this file is graphics/maps

    // maps/tilesets
    '^data/map/.*': 20,

    // code
    'data/strings.o': 5,
    'data/scripts.o': 4,
    // data
    '^data/animations/.*': 15,
    '^data/const/.*': 14,

    '^asm/.*': 13,
    '^data/.*': 16,
    '^src/.*': 3,
}

//  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
//           x  x  x        x             x  x  x  x           x           x
// TODO add legend

let  colors = [
    '#daf5b1',
    '#a4ed8b',
    '#6ce67f',
    '#3fcc94',
    '#2bada2',
    '#22768f',
    '#183c7a',
    '#291e58',
    '#3b0137',
    '#660653',
    '#940f5a',
    '#a6174c',
    '#cc293f',
    '#eb3636',
    '#eb6746',
    '#f5a762',
    '#fcd87e',
    '#fffa9e',
    '#fffbc7',
    '#fcfffd',
    '#d6fcff',
    '#b7d9f7',
    '#95a4f0',
    '#8775eb',
    '#7e4ae0',
]

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
    } : null;
}


function drawPalette() {
    let parent = document.createElement('div')
    let index = 0
    for(let color of colors) {
        let div = document.createElement('div')
        div.style.background = color
        div.style.width = '32px'
        div.style.height = '32px'
        div.style.display = 'inline-block'
        div.id = 'color_' + index
        div.innerHTML = ''+index
        div.style.textAlign = 'center'
        div.style.verticalAlign = 'center'
        div.style.lineHeight = '32px'
        div.style.color = '#000'
        index++;
        parent.appendChild(div)
    }
    document.body.appendChild(parent)

}
drawPalette();
for (let i = 0; i < colors.length; i++) {
    colors[i] = hexToRgb(colors[i])
}

function drawCanvas() {
    if (symbols.length == 0) {
        document.getElementById('symbol').innerHTML = ''
        return;
    }
    document.getElementById('offset').innerHTML = 'Offset: ' + offset.toString(16)
    // TODO color by symbol or by file

    let current_color = colors[0]
    let color_index = 0
    let canvas = document.getElementById('pixels')
    var ctx = canvas.getContext('2d');


    let last_used_addr = symbols[symbols.length-1].addr
    canvasHeight = (last_used_addr - 0x8000000) / 1024 + 1
    canvas.height = canvasHeight

    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    let next_symbol = 0
    while (next_symbol < symbols.length && symbols[next_symbol].addr < offset) { // TODO handle EOF
        next_symbol++;
    }

    if (next_symbol == symbols.length) {
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        console.error('End of usable symbols')
        return
    }

    let colorByFile = false;
    let lastFile = symbols[0].file;
    let lastFolder = ''


    for (let i = 0; i < canvasWidth*canvasHeight; i++) {
        if (next_symbol < symbols.length && offset + i >= symbols[next_symbol].addr) {

            switch (mode) {
                case 0: // symbol
                    color_index = (color_index + 1) % colors.length
                    current_color = colors[color_index]
                    break;
                case 1: // file
                    if (lastFile != symbols[next_symbol].file) {
                        color_index = (color_index + 1) % colors.length
                        current_color = colors[color_index]
                        lastFile = symbols[next_symbol].file
                    }
                    break;
                case 2: // folder
                    if (lastFile != symbols[next_symbol].file) {
                        lastFile = symbols[next_symbol].file
                        let folder = lastFile.substring(0,lastFile.lastIndexOf('/'))
                        if (folder != lastFolder) {
                            color_index = (color_index + 1) % colors.length
                            current_color = colors[color_index]
                            lastFolder = folder
                        }
                    }
                    break;
                case 3: // type
                    if (lastFile != symbols[next_symbol].file) {
                        lastFile = symbols[next_symbol].file
                        let found = false
                        for (let key of Object.keys(typeRegexes)) {
                            //let regex = new RegExp(key)
                            if (lastFile.match(key)) {
                                found = true
                                current_color = colors[typeRegexes[key]]
                                break
                            }
                        }
                        if (!found) {
                            current_color = '#ff00ff'
                        }
                    }
                    break;
            }
            next_symbol++;
            if (next_symbol == symbols.length) {
                current_color = '#000000'
            }
        }
        let rgb = current_color
        canvasData.data[i*4 + 0] = rgb.r;
        canvasData.data[i*4 + 1] = rgb.g;
        canvasData.data[i*4 + 2] = rgb.b;
        canvasData.data[i*4 + 3] = 255;
    }
    ctx.putImageData(canvasData, 0, 0);
    console.log((offset + canvasWidth*canvasHeight).toString(16))
    /*

    for (let i = 0; i < 1024*1024; i++) {
    //for (let i = 0x8000000; i < last_used_addr; i++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.background = colors[current_color]
        current_color = (current_color + 1) % colors.length
        parent.appendChild(pixel);
    }*/
    document.getElementById('symbol').innerHTML = 'Done'
    hoverOverSymbols = true;
}
//console.log('loaded')

function changeOffset(diff) {
    offset += diff
    drawCanvas(offset, symbols)
}

let hoverOverSymbols = false;

function mouseMove(event) {
    if (!hoverOverSymbols) {
        return;
    }
    let rect = event.target.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let addr = offset + x + y * canvasWidth;
    let next_symbol = 0
    while (next_symbol < symbols.length && symbols[next_symbol].addr < addr) { // TODO handle EOF
        next_symbol++;
    }
    if (next_symbol == symbols.length) {
        document.getElementById('symbol').innerHTML = 'No symbol'
        return
    }
    let symbol = symbols[next_symbol-1]
    document.getElementById('symbol').innerHTML = '0x'+addr.toString(16) + ' ' + symbol.name + ' ' + symbol.file + ' (+'+(addr-symbol.addr)+'|' + symbol.size + ')'
}

function toggleChanging() {
    hoverOverSymbols = !hoverOverSymbols;
}

function changeMode(newMode) {
    document.getElementById('mode'+mode).classList.remove('active')
    mode = newMode;
    document.getElementById('mode'+mode).classList.add('active')
    if (symbols.length > 0) {
        redrawCanvas();
    }
}

// document.getElementById('next').onclick = () => changeOffset(canvasWidth*canvasHeight)
// document.getElementById('prev').onclick = () => changeOffset(-canvasWidth*canvasHeight)
document.getElementById('mode0').onclick = () => changeMode(0)
document.getElementById('mode1').onclick = () => changeMode(1)
document.getElementById('mode2').onclick = () => changeMode(2)
document.getElementById('mode3').onclick = () => changeMode(3)
document.getElementById('pixels').onmousemove = mouseMove;
document.getElementById('pixels').onclick = toggleChanging;