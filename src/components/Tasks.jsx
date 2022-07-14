import React from 'react';

// componentes
import Task from './Task.jsx';

const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }) => {
    console.log(tasks);
    return (
        <>
            {
                tasks.map( task => (
                    <Task task={task} key={task.id} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />
                )) 
            }
        </>
    )
}

export default Tasks;