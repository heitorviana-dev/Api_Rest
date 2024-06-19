// Arquivo de configuração da db, incluindo senha, dialeto, host, entre outros.
require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  pool: {
    max: 10, // Aumenta o tamanho máximo do pool
    min: 0, // Define o tamanho mínimo do pool
    acquire: 30000, // Tempo máximo para adquirir uma conexão do pool
    idle: 10000, // Tempo antes de fechar uma conexão inativa
    evict: 5000, // Tempo antes de expulsar uma conexão inativa
  },
  define: {
    timestamps: true,
    underscored: true, // Converte 'nomeAluno' -> 'nome-aluno'
    underscoredAll: true,
    createdAt: 'created_at', // Exibe o momento de criação
    updatedAt: 'updated_at', // Exibe o momento de atualização
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
