import { socketHandler } from '@Middlwares/error-handler';

const StartSocketServer = (io, socket) => {
  socket.on('alguienTermino', socketHandler(async (msg) => {
    io.emit('alguienTermino', msg);
  }));

  socket.on('addAlumnos', socketHandler(async (msg) => {
    console.log('aaaaaaaaaaaaaaaa', msg);
  }));
};

export default StartSocketServer;
