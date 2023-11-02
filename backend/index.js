const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
const turmaRoute = require('./routes/turmaRoute')

const express = require('express');
const cors = require('cors');


conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('conect sucess')

        Tabelas.init(conexao)
        
        const app = express();

        //Implementando algumas configurações no projeto
        app.use(express.json({ limit: '100mb' }));
        app.use(express.urlencoded({ extended: false }));
        app.use(cors({ origin: '*' }));


        app.use("/turma", turmaRoute);

        app.listen(3000, () => console.log('serv rodando na port 3000'))
    }
})


