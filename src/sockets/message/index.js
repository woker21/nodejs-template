import { socketHandler } from '../../application/middlewares/error-handler';

export default (io, socket) => {
  socket.on('message', socketHandler(async (msg) => {
    console.log(msg);
  }));
};