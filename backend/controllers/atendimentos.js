const Atendimento = require('../models/atendimentos')

const exibir = async (req, res) => {
    Atendimento.exibirTurmas(res);
};

const consultar = async (req, res) => {
    const id = parseInt(req.params.id)

    Atendimento.buscaPorIdDeTurma(id, res);

};

const adiciona = async (req, res) => {
    const atendimento = req.body

    Atendimento.adicionaTurma(atendimento, res);
}

const editar = async (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Atendimento.alterarTurma(id, valores, res)
};

const excluir = async (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.excluirTurma(id, res);
};


module.exports = { exibir, consultar, adiciona, editar, excluir };


