const express = require('express');
const ongController = require('./Controller/OngsControllers');
const casosController = require('./Controller/CasosController');
const profileController = require('./Controller/ProfileController');
const sessionController = require ('./Controller/SessionController');

const Routes = express.Router();




Routes.get('/ongs', ongController.listar);
Routes.post('/ongs', ongController.create);
Routes.post('/casos', casosController.create);
Routes.get('/casos',casosController.listar);
Routes.delete('/casos/:id',casosController.delete)
Routes.get('/profile', profileController.listarEspecifico);
Routes.post('/session', sessionController.login);

module.exports = Routes;
