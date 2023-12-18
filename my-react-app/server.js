// server.js
const express = require('express');
const cors = require('cors');
const db = require('./src/data'); // Importa o módulo que estabelece a conexão com o banco de dados
const app = express();
const PORT = 5000;

app.use(cors());

// Rota para buscar todos os personagens
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM personagens'; // Modifique conforme a estrutura do seu banco de dados

  db.all(query, (err, rows) => {
    if (err) {
      console.error('Erro ao buscar dados do banco de dados:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }

    res.status(200).json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
