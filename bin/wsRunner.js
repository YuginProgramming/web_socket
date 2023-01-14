const io = require('socket.io');

const server = io();

server.on('connection', client => {
    console.log('!!!!!!!!');    
});

server.listen(7000);