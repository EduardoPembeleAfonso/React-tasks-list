import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../context/userContext';

// estilos
import '../styles/Header.css';

const Header = () => {
    // context 
    const { user, logoutUser } = useUserContext();

    // navigate - navegação
    const navigate = useNavigate();

    // função que me leva de volta pra a pagina home
    const handleClickButtonVoltar = () => {
        navigate('/');
    }

    return (
        <>
            <div className="header">
                <div className="topHeader">
                    <h1>{ user.email }</h1>
                    <div className="div-button-add-task-voltar">
                        <button className="button-add-task-voltar" onClick={handleClickButtonVoltar}> Voltar </button>
                        <button onClick={logoutUser} className="logout-add-task">Sair</button>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default Header;