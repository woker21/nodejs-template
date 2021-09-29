import socketIO from 'socket.io';
import MessageController from './message';
import UserController from './user';


const config = {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true
};

export default (server) => {
  const io = socketIO(server, config);
  io.on('connection', (socket) => {
    MessageController(io, socket);
    UserController(io, socket);
  });
}
