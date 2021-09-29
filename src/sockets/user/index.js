import * as Model from '../../entities/user/model';
import { socketHandler } from '../../../middlewares/error-handler';

const StartSocketServer = (io, socket) => {
  socket.on('alguienTermino', socketHandler(async (msg) => {
    await Model.create('pp@pp.com', 'juan', 'rqr');
    io.emit('usuarioCreado', msg);
  }));
};

export default StartSocketServer;