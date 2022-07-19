import React from 'react';
import Lottie from 'react-lottie';

import { useUserContext } from './context/userContext';

// componentes
import Index from './components/Index';
import Auth from './components/Auth';

// Lottie json
import progress from './lottie/72212-loading.json';

// estilos
import './App.css';

const App = () => {

  const { loading, error, user } = useUserContext();
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: progress
  }

  return (
        <div className='appContainer'>
          {
            loading ? <Lottie options={lottieOptions} width={400} height={400} /> : 
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
