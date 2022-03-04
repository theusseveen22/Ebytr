import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/tasks" element={ <Tasks /> } />
      </Routes>
      </div>
  );
}

export default App;
