import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore';
import { useUserContext } from '../context/userContext';
import { db } from '../firebase';

// componentes
import RouteHome from './RouteHome';
import AddTasks from './AddTasks';
import TaskEdit from './TaskEdit';

// estilos
import '../App.css';

const App = () => {
  
  // estados
  const [tasks, setTask] = useState([]);
  
  // context
  const { user } = useUserContext();
  
  
  // hook que pega todas as tarefas da minha base de dados (bd)
  useEffect( () => {
    const collectionRef = collection(db, 'tasks');
    const q = query( collectionRef, where("userId", "==", user.uid), orderBy('created', 'desc') );
    onSnapshot( q, (querySnapshot) => {
      setTask( querySnapshot.docs.map( doc => ({
        id: doc.id,
        data: doc.data()
      }) ) )
      // eslint-disable-next-line react-hooks/exhaustive-deps


    } )

    console.log('q :', q);
  }, [] ); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
      <Router>
        <div className='routerContainer'>
            <Routes>
              <Route path='/' element={<RouteHome tasks={tasks} />} exact  />
              <Route path='/add-task' element={<AddTasks />} exact  />
              <Route path="/edit-task/:id" element={<TaskEdit task={tasks} />} />
            </Routes>
        </div>
      </Router>
    </>
  )
}


export default App;
