import React, { useState, useEffect } from 'react';
import getAllTasks from '../services/getAllTasks';

function GetTasksAll() {
  const [dataTasks, setDataTasks] = useState([]);

  useEffect(() => {
    const getSale = async () => {
      const data = await getAllTasks();
      setDataTasks(data);
    }
  getSale();
  }, []);

  const loading = 'Parabéns, você não tem nenhuma tarefa! =)'

  return (
    !dataTasks || dataTasks.length === 0
      ? <h1>{loading}</h1>
      : dataTasks.map((element, index) => (
        <div
          key={ index }
        >   
            <table>
                <tr>
                  <th>Tarefa</th>
                  <th>Descrição</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>{ element.title }</td>
                  <td>{ element.description }</td>
                  <td>{ element.status }</td>
                </tr>
            </table>
        </div>))
  );
}

export default GetTasksAll;