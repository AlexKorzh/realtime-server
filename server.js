const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Figma plugin connected');
  
  socket.on('figma-createNode', (nodeShape) => {
    io.emit('client-createNode', nodeShape);
  });

  socket.on('figma-deleteNode', (nodeId) => {
    console.log('deleteNode', nodeId);
    io.emit('client-deleteNode', nodeId);
  });

  socket.on('figma-propertyChange', (nodesShape) => {
    io.emit('client-propertyChange', nodesShape);
  });

  socket.on('disconnect', () => {
    console.log('Figma plugin disconnected');
  });
});
// Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});