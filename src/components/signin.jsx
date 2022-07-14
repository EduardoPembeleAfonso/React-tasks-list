import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

// estilos
import '../styles/Signin.css';

const Signin = ({ index, toggleIndex }) => {
  // refs
  const emailRef = useRef();
  const psdRef = useRef();

  // context
  const { signInUser, forgotPassword } = useUserContext();


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
      alert('Insira um email pra redifinir a sua senha!');
    }
  }


  return (
    <>
        <div className="signinContainer">

        <h2 className="titleForm"> Login </h2>
        
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
            <p onClick={handleClickForgotPassword} className="forgot-password">Forgot Password?</p>
          <button type="submit" className="button-signin">Sign In</button>
        </form>

      </div>

    </>
  )

};

export default Signin;