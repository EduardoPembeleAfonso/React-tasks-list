import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

// estilos
import '../styles/Signin.css';

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

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