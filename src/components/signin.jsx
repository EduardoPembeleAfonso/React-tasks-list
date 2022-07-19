import React, { useRef, useState } from "react";
import { useUserContext } from "../context/userContext";

// estilos
import '../styles/Signin.css';

const Signin = ({ index, toggleIndex }) => {
  // states
  const [errorFPassword, setErrorFPassword] = useState(false);
  // refs
  const emailRef = useRef();
  const psdRef = useRef();

  // context
  const { signInUser, forgotPassword, error, errorSignin } = useUserContext();


  // função que faz o login
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };


  // função de redifinir senha
  const handleClickForgotPassword = () => {
    const email = emailRef.current.value;
    if (email){
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
    } else {
      setErrorFPassword(true);
    }
  }


  return (
    <>
        <div className="signinContainer">

        <h2 className="titleForm"> Login </h2>
        
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
            <p onClick={handleClickForgotPassword} className="forgot-password">Forgot Password?</p>
          <button type="submit" className="button-signin">Sign In</button>
        </form>

      </div>

    </>
  )

};

export default Signin;