import React, { useState } from "react";

// componentes
import Signin from "./signin";
import Signup from "./signup";

// estilos
import '../styles/auth.css';

const Auth = () => {
  // estados
  const [index, setIndex] = useState(false);

  // função que altera o valor do estado Index
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  return (
    <div className="authContainer">
      <div className="divAuthContainer">
        {!index ? <Signin index={index} toggleIndex={toggleIndex} /> : <Signup />}
      </div>
      <p onClick={toggleIndex}>
        {!index ? "Precisa de uma conta ? Click Aqui " : "Já tem uma conta ?"}
      </p>
    </div>
  );
};

export default Auth;