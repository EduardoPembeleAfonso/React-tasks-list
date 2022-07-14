import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import { useUserContext } from './context/userContext';

import Index from './components/Index';
import Auth from './components/Auth';
import './App.css';

const App = () => {

  const { loading, error, user } = useUserContext();

  return (
        <div className='appContainer'>
          {
            error && <p> {error} </p>
          }
          {
            loading ? <h2>Loading...</h2> : 
            <>
              {
                user ? < Index /> : < Auth />
              }
            </>
          }
        </div>
    )
}


export default App;
