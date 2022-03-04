import React, { useState, useContext } from 'react';
import Context from '../context/Context'
import createTasks from '../services/createTasks';
 
function Forms() {
    // Pegando dados do data no Context
    const { dataTasks, setDataTasks } = useContext(Context)
  
    // Estado que controla o formulário 
    const [formData, setForm] = useState({})

    // Função de onChange do formulário
    const handleChange = ({ target }) => {
        const { value, name } = target;
        setForm({...formData,
            [name]: value
        });
    }
    
    // Função de clique para criar um novo Task
    const handleClick = async () => {
        const { insertedId } = await createTasks(formData);
        const newForm = {...formData, _id: insertedId}
        setDataTasks([...dataTasks, newForm]);
    }
    
  return (
    <div className="formsFilds">
        <span><h3>Adicione uma nova tarefa</h3></span>
        <input type='text' name="title"
        onChange={ handleChange }
        />
        <button 
        type="button" onClick={ handleClick }
        
        >Adicionar nova tarefa</button>
    </div>
  );
}

export default Forms;