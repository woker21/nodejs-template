import UsersController from './users';
import AuthController from './auth';

export default function (app) {
  // Public
  app.use('/auth', AuthController);


  // Private
  app.use('/users', UsersController);
}
