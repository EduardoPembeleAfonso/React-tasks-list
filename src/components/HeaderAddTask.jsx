import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../context/userContext';

// estilos
import '../styles/Header.css';

const Header = () => {
    const date = new Date();

    const monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const today = date.getDate();
    const month = date.getMonth();
    // context 
    const {logoutUser } = useUserContext();

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
                <div>
                    <h1>{monName[month]}, {today}</h1>
                </div>
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