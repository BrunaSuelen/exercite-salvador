const express = require('express');

const turmaRoute = express.Router();

const {
  exibir,
  consultar,
  adiciona,
  editar,
  excluir
} = require('../controllers/atendimentos');


turmaRoute.get('/', exibir);

turmaRoute.get('/:id', consultar);

turmaRoute.post('/', adiciona);

turmaRoute.patch('/:id', editar);

turmaRoute.delete('/:id', excluir);

module.exports = turmaRoute