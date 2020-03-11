const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const routes = require('./routes');
const cors = require('cors');
const { setupWebSocket } = require('./websocket');



const app = express();
const server = http.Server(app);

setupWebSocket(server);

const uri = 'mongodb://omnistack:omnistack@cluster0-shard-00-00-pvz1z.mongodb.net:27017,cluster0-shard-00-01-pvz1z.mongodb.net:27017,cluster0-shard-00-02-pvz1z.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).
  then(() => console.log('Server Connected')).
  catch(err => console.log('Error connect', err.stack));

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET,POST, PUT, DELETE

//Tipos de parâmetros

//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params:request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro, ..)


server.listen(3333);