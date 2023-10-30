import React, { useState } from "react";
import FormTurma from '../../forms/FormTurma/FormTurma';
import CardList from '../../components/CardList/CardList';
import './Turma.css';

function Turma() {
  const [visualizarFormularioEdicao, setVisualizarFormularioEdicao] = useState(false);
  const [visualizarFormulario, setVisualizarFormulario] = useState(false);
  const [turma, setTurma] = useState();

  const consultarTurma = (indice) => {
    setVisualizarFormulario(true);
    setVisualizarFormularioEdicao(true);
    setTurma(indice);
  }

  return (
    <div className="Turma">
      <div className='cabecalho'>
        <h6>Turmas</h6>
        { (visualizarFormularioEdicao) &&
          <button className="botao-apagar">
            Apagar
          </button>
        }

        { (!visualizarFormulario && !visualizarFormularioEdicao) &&
          <button className="botao-nova-turma" onClick={() => setVisualizarFormulario(true)}>
            Nova Turma
          </button>
        }
      </div>


      {(visualizarFormulario) 
        ? <FormTurma></FormTurma> 
        : <CardList consultarTurma={() => consultarTurma}></CardList>
      }

      { visualizarFormulario && 
        <button className="botao-voltar" onClick={() => window.location.reload()}>
          Voltar
        </button>
      }
    </div>
  );
}

export default Turma;