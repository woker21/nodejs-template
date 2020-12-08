import UsersController from './users';
import AuthController from './auth';

export default function (app) {
  // Private
  app.use('/users', UsersController);

  app.use('/', (req, res) => res.send(`Working like a charm ٩(^‿^)۶`));
}
