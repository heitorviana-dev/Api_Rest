import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

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

  routes() { // Define as rotas utilizadas
    this.app.use('/', homeRoutes);
  }
}

export default new App().app; // Iremos exportar a classe instanciada.
