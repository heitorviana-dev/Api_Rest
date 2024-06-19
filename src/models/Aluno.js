import { Sequelize, Model } from 'sequelize';

export class Aluno extends Model {
  static init(sequelize) { // sequelize representa a conexão com o sequelize
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
