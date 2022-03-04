import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Home() {
  return (
    <div className="home">
        <h1>To DOOM List - Bem vindo!</h1>
        <h2><Link to="/tasks">Acessar suas Tasks</Link></h2>
    </div>
  );
}

export default Home;