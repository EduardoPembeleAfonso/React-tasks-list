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
  const [users, setUsers] = useState("");

  // context
  const { user } = useUserContext();
  
  
  // hook que pega todas as tarefas da minha base de dados (bd)
  useEffect( () => {   
    setUsers(user.uid)
    const collectionRef = collection(db, 'tasks');
    const q = query( collectionRef, where("userId", "==", users), orderBy('created', 'desc') );
    onSnapshot( q, (querySnapshot) => {
      setTask( querySnapshot.docs.map( doc => ({
        id: doc.id,
        data: doc.data()
      }) ) )


    } )

    console.log('q :', q);
  }, [] );


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
