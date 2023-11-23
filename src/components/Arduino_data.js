var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('IndexComponent.js');
 const { SerialPort } = require('serialport');
const port = new SerialPort({
    path: 'COM12',
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    flowControl: false
});

var app = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(index);
});

var io = require('socket.io')(app); // Pass 'app' to socket.io directly

io.on('connection', function (socket) { // 'socket' represents the connection
    console.log('Node.js is listening');
});

port.on('open', function () {
    console.log('Connection opened');
});

port.on('data', function (data) {
  
    data = data.toString();
 
    io.emit('data', data);
    console.log(data);
});
// console.log(val);
app.listen(3000, function () {
    console.log('node is listening');
});
