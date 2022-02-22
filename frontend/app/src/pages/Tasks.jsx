import React from 'react';
import TasksCard from './TasksCards';
import Forms from './Forms';
import './style.css'

function Tasks() {
  return (
    <div className="tasks">
        <Forms />
        <TasksCard />
    </div>
  );
}

export default Tasks;