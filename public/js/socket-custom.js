   var socket = io();
   //ESCUCHAR
   //cuando esta conectado
   socket.on('connect', function() {
           console.log('Conectado al servidor')
       })
       //detecta cuando no hay conexion o se pierde
   socket.on('disconnect', function() {
           console.log('No hay conexion con el server')
       })
       //escuchar mensaje desde le server
   socket.on('EnviarMensaje', function(mensaje) {
       if (mensaje.mensaje && mensaje.usuario) {
           if (mensaje.mensaje != 'Bienvenido al chat con SocketIO') {
               var tem = `<div class="form-group" width='100px'>
       <img class = "fa fa-lg fa-user pb-chat-fa-user" src='assets/user.png' width='30%'><span class="label label-default pb-chat-labels pb-chat-labels-left"> ${mensaje.usuario}  ${': '} ${mensaje.mensaje} </span>
        </div><hr>`
               $('#messages').append(tem)
           }

       }




   })

   let usuarioa = ''

   function hacer_click() {
       let valorUSUARIO = document.getElementById("usuario").value;

       if (valorUSUARIO != null && valorUSUARIO != undefined && valorUSUARIO != '') {
           usuarioa = valorUSUARIO
       }
       console.log(usuarioa)

       let valor = document.getElementById("myMessage").value;
       console.log(valor)


       if (valor == null || valor == '') {
           alert('Ingrea un mensaje')
       }
       if (usuarioa == null || usuarioa == '') {
           alert('Ingrea un nombre de usuario')
       } else {
           socket.emit('EnviarMensaje', {
               usuario: usuarioa,
               mensaje: valor
           })
           $('#myMessage').val('')
           var tem = `<div class="form-group" width='100px'>
       <img class = "fa fa-lg fa-user pb-chat-fa-user" src='assets/user.png' width='30%'><span class="label label-primary pb-chat-labels pb-chat-labels-left"> ${usuarioa}  ${': '} ${valor} </span>
        </div><hr>`
           $('#messages').append(tem)
       }



   }



   //EMITIR
   //emitir evento envier infor