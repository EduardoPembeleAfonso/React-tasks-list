import React, { useRef, useState } from "react";
import { useUserContext } from "../context/userContext";

// estilos
import '../styles/Signin.css';

const Signup = () => {
  // states
  const [errorFPassword, setErrorFPassword] = useState(false);

  // refs
  const emailRef = useRef();
  const psdRef = useRef();

  // context
  const { registerUser, error, errorSignin } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) registerUser(email, password);
  };

  return (
    <>
        <div className="signinContainer">

        <h2 className="titleForm"> Registrar </h2>
        
        <form onSubmit={onSubmit} className="formContainer">
          <span className={ errorSignin ? 'span-error' : 'span-error-false'} > {error ? error : ''} </span>
          <span className={ errorFPassword ? 'span-error' : 'span-error-false'} > {errorFPassword ? 'Insira um email pra redifinir a sua senha!' : ''} </span>

            <input 
            placeholder="Email" 
            type="email" ref={emailRef} 
            className='email'
            />
          <input 
            placeholder="Password" 
            type="password" 
            ref={psdRef} 
            className="password" 
            />
            
            <button type="submit" className="button-signin">Registrar</button>

          </form>
  
        </div>

    </>
  )
};

export default Signup;