import React from "react";
import './CardList.css';

const CardList = ({ lista, consultarTurma }) => {
  return (
    <div className="CardList">
      <div className="card" onClick={consultarTurma(1)}>
        <h3>Título</h3>
        <h6>Localização</h6>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas et sapien id tempus. Nunc nunc nisl, finibus vel dui ac, dignissim auctor tellus. Duis eget dictum elit.</p>
        <h6 className='mt-3'>HORÁRIOS</h6>
        <p>Horários</p>
      </div>
    </div>
  );
}

export default CardList;