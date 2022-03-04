import React from 'react';
import FaceDoom from '../components/FaceDoom';
import Forms from '../components/Forms';
import GetTasks from '../components/GetTasks';
import './style.css'

function Tasks() {
  return (
    <div className="tasks">
        <Forms />
        <GetTasks />
        <FaceDoom />
    </div>
  );
}

export default Tasks;