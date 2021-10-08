import userRoutes from './user/adapters/http';
import userSockets from './user/adapters/socket';

export const Routes = (app) => {
  userRoutes(app);
  // messageRoutes(app);
}

export const Sockets = (io, socket) => {
  userSockets(io, socket);
  // messageSockets(io, socket);
}