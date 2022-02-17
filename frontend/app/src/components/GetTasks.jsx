import React, { useContext } from 'react';
import Context from '../context/Context'
import './style.css'

function GetTasksAll() {

  const { dataTasks } = useContext(Context);
  const loading = 'Parabéns, você não tem nenhuma tarefa! =)'

  return (
    !dataTasks || dataTasks.length === 0
      ? <h1>{loading}</h1>
      : dataTasks.map((element, index) => (
        <div
          key={ index }
          className="tasksList"
        >   
            <h3>Tarefa { element.title }</h3>
            <h3>Descrição { element.description }</h3>
            <h3>Status { element.status }</h3>
        </div>))
  );
}

export default GetTasksAll;