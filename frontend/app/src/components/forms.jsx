import React, { useContext } from 'react';
import createTasks from '../services/createTasks';
import Context from '../context/Context'
 
function Forms() {
    const { formData, setForm } = useContext(Context);

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setForm({
            [name]: value
        });  
    }
    
    const handleClick = () => {
        createTasks(formData)
    }

  return (
    <div className="formsFilds">
        <span><h3>título da tarefa</h3></span>
        <input type='text' name="title"
        onChange={ handleChange }
        />
        <span><h3>Descrição</h3></span>
        <textarea 
        onChange={ handleChange }
        type="t" name="description"
        rows="5" cols="30"
        />
        <button 
        type="button" onClick={ handleClick }
        
        >Adicionar nova tarefa</button>
    </div>
  );
}

export default Forms;