import socket_io from 'socket.io-client';

const socket = socket_io('http://192.168.31.85:3333', {
  autoConnect: false
});

function subscribeNewDev(subscribeFunctions) {
  socket.on('new_dev', subscribeFunctions);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();

  socket.on('message', text => {
    console.log(text);
  });
};

function disconnect() {
  if (socket.connect) {
    socket.disconnect();
  };
};

export {
  connect, 
  disconnect,
  subscribeNewDev
};