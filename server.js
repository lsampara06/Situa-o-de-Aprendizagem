const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/clientes', (req, res) => {
  const { nome, email } = req.body;
  db.query('INSERT INTO clientes (nome, email) VALUES (?, ?)', [nome, email],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ id: result.insertId, nome, email });
    });
});
app.post('/pedidos', (req, res) => {
  const { cliente_id, descricao, valor } = req.body;
  db.query('INSERT INTO pedidos (cliente_id, descricao, valor) VALUES (?, ?, ?)',
    [cliente_id, descricao, valor],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ id: result.insertId, cliente_id, descricao, valor });
    });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

app.get('/pedidos-clientes', (req, res) => {
  const sql = `
    SELECT p.id, p.descricao, p.valor, c.nome, c.email
    FROM pedidos p
    INNER JOIN clientes c ON p.cliente_id = c.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

app.get('/resumo-clientes', (req, res) => {
  const sql = `
    SELECT c.nome, SUM(p.valor) as total_gasto
    FROM pedidos p
    INNER JOIN clientes c ON p.cliente_id = c.id
    GROUP BY c.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

