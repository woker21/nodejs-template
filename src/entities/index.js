import UsersController from './user/controller';

export default function (app) {
  // Private
  app.use('/user', UsersController);

  app.use('/', (req, res) => res.send('Working like a charm'));

}
