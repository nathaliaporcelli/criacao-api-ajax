const sqlite3 = require('sqlite3');

// Abre a conexão com o banco de dados
const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  }
});

module.exports = db;
