    //Detecta conexion de usuario
    const io = require('../server').io
    io.on('connection', (client) => {
        console.log('Usuario conectado')
        client.emit('EnviarMensaje', {
                usuario: 'Servidor',
                mensaje: 'Bienvenido al chat con SocketIO'
            })
            //detecta cuando se desconecta
        client.on('disconnect', () => {
            console.log('Usuario desconectado')
        })

        //escuchar cliente
        client.on('EnviarMensaje', (data, callback) => {
            console.log(data)
            client.broadcast.emit('EnviarMensaje', data)
                /*console.log(mensaje)
                if (mensaje.usuario) {
                    callback('Todo dalio bien')
                } else {
                    callback('Todo dalio mal')
                }*/

        })

    })