const express = require('express');
const path = require('path');
const socketIO = require('socket.io')
const http = require('http')
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
let server = http.createServer(app)


app.use(express.static(publicPath));
//Inicializa el servidor Socket (comunicacion)
module.exports.io = socketIO(server)
require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});