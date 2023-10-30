import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <header className='menu-principal'>
      <div className='menu-conteudo'>
        <img src="images/exercite-logo.png"></img>
        <hr/>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/#">Esportes</Link></li>
          <li><Link to="/#">Eventos</Link></li>
          <li><Link to="/turma">Turmas</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Menu;