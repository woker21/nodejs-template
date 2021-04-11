import express from 'express';
import http from 'http';
import Middlewares from './application/middlewares';
import ApiControllers from './controllers/api';
import Documentation from './application/documentation';
import ConnectDatabase from './application/database';
//import SocketsControllers from './controllers/sockets';

const app = express();
/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/
const port = process.env.PORT || 5000;
const server = http.createServer(app);

Documentation(app);
Middlewares(app);
ApiControllers(app);
// SocketsControllers(server);

ConnectDatabase(() => {
    server.listen(port, () => console.log(`Server listening to http://localhost:${port}`));
});