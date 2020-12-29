import socketIO from 'socket.io';
import MessagesController from './message';

const config = {
  cors: {
    origin: "*",
  }
};

export default (server) => {
  const io = socketIO(server, config);
  io.on('connection', (socket) => {
    MessagesController(io, socket);
  });
}
