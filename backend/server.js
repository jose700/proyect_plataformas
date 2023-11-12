const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const amqp = require('amqplib');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
const angularDistPath = path.join(__dirname, '../fronted/angular-cliente/dist/angular-cliente/');
app.use(express.static(angularDistPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.html'));
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas 
app.use(require('./routes/estudiantes/estudiante'));
app.use(require('./routes/representantes/representante'));
app.use(require('./routes/tutores/tutor'));
app.use(require('./routes/segumientos-medicos/tratamientos-medicos/consulta'));
app.use(require('./routes/segumientos-medicos/tratamientos-medicos/cumplido'));
app.use(require('./routes/segumientos-medicos/tratamientos-medicos/nocumplido'));
app.use(require('./routes/segumientos-academicos/asignaturas/asignatura'));
app.use(require('./routes/segumientos-academicos/asignaturas/aprobada'));
app.use(require('./routes/segumientos-academicos/asignaturas/reprobada'));
app.use(require('./routes/historial-medico/medico'));
app.use(require('./routes/historial-academico/academico'));


// WebSockets
io.on('connection', (socket) => {
  console.log('Cliente WebSocket conectado');

  // Escucha eventos del cliente
  socket.on('chat message', (message) => {
    console.log('Mensaje recibido del cliente: ' + message);

    // Envía el mensaje a todos los clientes conectados
    io.emit('chat message', message);
  });

  
});

// Message Broker (RabbitMQ)
const rabbitmqHost = 'amqp://localhost'; // Reemplaza con la URL de tu servidor RabbitMQ
amqp.connect(rabbitmqHost)
  .then((connection) => {
    return connection.createChannel();
  })
  .then((channel) => {
    const exchangeName = 'messages';

    // Declara un exchange para enrutamiento
    channel.assertExchange(exchangeName, 'fanout', { durable: false });

    // Crear cola temporal
    return channel.assertQueue('', { exclusive: true })
      .then((q) => {
        // Vincula la cola al exchange
        channel.bindQueue(q.queue, exchangeName, '');

        // Escucha mensajes de la cola
        channel.consume(q.queue, (msg) => {
          if (msg.content) {
            console.log('Mensaje recibido del Message Broker: ' + msg.content.toString());
          }
        }, { noAck: true });
      });
  })
  .catch((err) => {
    console.error('Error al conectarse al servidor RabbitMQ:', err);
  });

server.listen(process.env.PORT, () => {
  console.log(`Sistema running on port ${process.env.PORT}`);
});
