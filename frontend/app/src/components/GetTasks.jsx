import React from 'react';
import './style.css';

function GetTasksAll(props) {
  
  const loading = 'Parabéns, você não tem nenhuma tarefa! =)'
  const dataTasks = props.data;
  console.log('ComponentTasks', dataTasks)
  
  return (
    !dataTasks || dataTasks.length === 0
      ? <h1>{loading}</h1>
      : dataTasks.map((element, index) => (
        <div
          key={ index }
          className="tasksList"
        >   
            <h4>Tarefa { element.title }
            {/* <button 
        type="button" onClick={ handleClick(element.id) }
        >Concluir</button> */}
            </h4>
        </div>))
  );
}

export default GetTasksAll;