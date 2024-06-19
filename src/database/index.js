// Todo model que criarmos terá que vir para esse arquivo
// Este é o arquivo de configuração dos models
import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import { Aluno } from '../models/Aluno';

const models = [Aluno];

const connection = new Sequelize(databaseConfig);

try {
  // Tenta autenticar a conexão com o banco de dados
  connection.authenticate().then(console.log('Database connection has been established successfully.'));
} catch (err) {
  console.error('Unable to connect to the database:', err);
}

models.forEach((model) => model.init(connection));
