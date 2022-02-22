import React, { useEffect, useState } from 'react';
// import Context from '../context/Context'
import createTasks from '../services/createTasks';
import GetTasks from '../components/GetTasks'
import getAllTasks from '../services/getAllTasks';
 
function Forms() {
    const [formData, setForm] = useState({})
    // const { dataTasks } = useContext(Context);

    const [dataTasks, setDataTasks] = useState([]);


    useEffect(() => {
      const getAllData = async () => {
        const data = await getAllTasks();
        setDataTasks(data);
      }
    getAllData();
    }, []);

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setForm({...formData,
            [name]: value
        });
    }
    
    const handleClick = async () => {
        const { insertedId } = await createTasks(formData);
        const newForm = {...formData, _id: insertedId}
        dataTasks.push(newForm);
        setDataTasks(dataTasks);
    }

    console.log('DATA LIST TA COMO?', dataTasks);

  return (
      <>
    <div className="formsFilds">
        <span><h3>Tarefa: </h3></span>
        <input type='text' name="title"
        onChange={ handleChange }
        />
        <button 
        type="button" onClick={ handleClick }
        
        >Adicionar nova tarefa</button>
    </div>
    <div>
        {
            <GetTasks data={dataTasks} />
        }
    </div>
    </>
  );
}

export default Forms;