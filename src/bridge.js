import {loadMgba, loadBizhawk} from './main.js';

function setupBridge() {
    document.getElementById('bridge-button').onclick = connectToTlh;
}

function connectToTlh() {
    document.getElementById('bridge-details').style.display = 'inline-block';
    document.getElementById('bridge-button').style.display = 'none';
    loadSocketIo();
}

function setStatus(text, color) {
    document.getElementById('bridge-status').innerText = text;
    document.getElementById('bridge-indicator').style.backgroundColor = color;
}



function loadSocketIo() {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js';
    script.onload = startSocketIo;
    document.body.appendChild(script);
}

let color_green = '#67c52a';
let color_red = '#ec2f19';
let color_yellow = '#efdf00';

function startSocketIo() {
    var socket = io('http://localhost:10243');
    socket.on('disconnect', function () {
        error('Disconnected');
    });
    socket.on('connect_error', function () {
        error('Connection failed');
    });
    socket.on('connect', () => {
        setStatus('Connected', color_green);
        socket.emit('client_connected');
    });
    socket.on('load_mgba', (data) => {
        loadMgba(data);
    });
    socket.on('load_bizhawk', (data) => {
        loadBizhawk(data);
    });
}

function error(message) {
    console.error(message);
    setStatus('Error: ' + message, color_red);
}

export {
    setupBridge
};