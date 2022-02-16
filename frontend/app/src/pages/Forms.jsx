import React from 'react';
import { Link } from 'react-router-dom';

function Forms() {
  return (
    <div className="App">
        <h1>Ebytr - Bem vindo!</h1>
        <Link to="/tasks">Minhas Tasks</Link>
    </div>
  );
}

export default Forms;