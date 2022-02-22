import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Home() {
  return (
    <div className="home">
        <h1>To Doom List - Bem vindo!</h1>
        <Link to="/tasks">Minhas Tasks</Link>
    </div>
  );
}

export default Home;