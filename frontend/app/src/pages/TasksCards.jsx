import React from 'react';
import GetTasks from '../components/GetTasks';
import './style.css'

function TasksCard() {
  return (
    <div className="tasksCard">
        <GetTasks />
    </div>
  );
}

export default TasksCard;