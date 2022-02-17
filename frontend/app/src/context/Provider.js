import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getAllTasks from '../services/getAllTasks';

function Provider({ children }) {
  const [formData, setForm] = useState({
    title: "",
    description: ""
})

const [dataTasks, setDataTasks] = useState([]);

useEffect(() => {
  const getSale = async () => {
    const data = await getAllTasks();
    setDataTasks(data);
  }
getSale();
}, [dataTasks, formData]);

  const states = {
    formData,
    setForm,
    dataTasks
  };

  return (
    <Context.Provider value={ states }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
