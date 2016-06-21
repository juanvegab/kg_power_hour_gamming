var WebSocketServer = require('ws').Server;

var WSS = new WebSocketServer({
  port: 9090
});

WSS.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log('Received: '+ message);
    WSS.broadcast(message);
  });
});

WSS.broadcast = function broadcast(data) {
  WSS.clients.forEach(function each(client) {
    client.send(data);
  });
};
