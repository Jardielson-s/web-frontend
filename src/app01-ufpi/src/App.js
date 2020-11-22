import React from 'react';

import banco from "./images/banco-digital.jpg";
import virtual from "./images/virtualcoin.jpg";
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <label>controlador conta</label>
        <Link to="/create"><button type="">cadastrar</button></Link>
        <Link to="/login"><button link="/" >entrar</button></Link>
      </header>
      <div className="content">
        <p>forma segura de controlar o seu dinheiro conm o controller account  </p>
         <p>você pode trnasferir , receber , tem a opção de log de transferência</p>     
      </div>
      <div className="images">
        <img src={banco} title="bank"/>
        <img src={virtual} title="coin" />
      </div>
    </div>
  );
}

export default App;
