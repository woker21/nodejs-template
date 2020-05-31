import express from 'express';
import http from 'http';
import Middlewares from './middlewares';
import Controllers from './controllers';
import Documentation from './documentation';

const app = express();
/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/
const port = process.env.PORT || 3005;

Documentation(app);
Middlewares(app);
Controllers(app);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server listening to http://localhost:${port}`));