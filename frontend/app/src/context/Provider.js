import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getAllTasks from '../services/getAllTasks';

function Provider({ children }) {
  const [dataTasks, setDataTasks] = useState([]);


useEffect(() => {
  const getAllData = async () => {
    const data = await getAllTasks();
    setDataTasks(data);
  }
getAllData();
}, []);

  const states = {
    dataTasks,
    setDataTasks
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
