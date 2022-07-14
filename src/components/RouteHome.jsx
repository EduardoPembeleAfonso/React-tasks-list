import React from 'react';

// componentes
import Tasks from './Tasks';
import Header from './Header';

const RouteHome = ({ tasks, handleTaskClick }) => {

    return (
        <>
          < Header />
          < Tasks tasks={tasks} handleTaskClick={handleTaskClick} /> 
        </>
    )
}

export default RouteHome;