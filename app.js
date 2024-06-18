/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() { // Método para configurar os middlewares que serão usados.
    this.app.use(express.urlencoded({ extended: true })); // Permite o tratamento de dados via corpo da requisição.
    this.app.use(express.json()); // Permite o tratamento de dados json.
  }

  routes() { // Método para configurar as rotas que serão usadas.
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
