import React, { useContext } from 'react';
import './style.css';
import removeTask from '../services/removeTask';
import Context from '../context/Context'

function GetTasksAll() {
  // Pegando dados do data no Context
  const { dataTasks, setDataTasks } = useContext(Context)

  const loading = 'Relaxa, você não tem nenhuma tarefa!'

  const handleClick = async (id) => {
    await removeTask(id);
    const newData = dataTasks.filter((element) => element._id !== id)
    setDataTasks(newData);
  }

  return (
    <div>
    { !dataTasks || dataTasks.length === 0
      ? <h1 className='text-h1'>{loading}</h1>
      : dataTasks.map((element, index) => (
        <div
          key={ index }  className='taskslist'
        >   
            <h4>Tarefa--  { element.title }</h4>
            <button 
        type="button" onClick={ () => handleClick(element._id) }
        >Concluir</button>
        </div>
        ))
         }
  </div> );
}

export default GetTasksAll;