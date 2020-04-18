const express = require('express');
const cors    = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);


/* Metodo HTTP:

*  GET: Buscar uma informação no backend
*  POST: Criar uma informação no backend
*  PUT: Alterar uma informação no backend
*  DELETE: Deletar um informação no backend

*/

/* Tipo de Parâmetro :

   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos  

*/

/* 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
  * NoSQL: MongoDB, CouchDB, etc <--Bancos não relacionais
*/

/*
    * Driver : SELECT * from User 
    * Query Builder: Table('user').select('*').where()
    
*/







//Porta do backend
app.listen(3333);




