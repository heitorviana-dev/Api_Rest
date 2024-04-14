import express from 'express';

class App {
  constructor() { // Sempre que a classe for instanciada o contrutor será executado.
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true })); // Permite o req.body.
    this.app.use(express.json()); // Permite o tratamento de dados json.
  }

  routes() {

  }
}

export default new App().app; // Iremos exportar a classe instanciada.
