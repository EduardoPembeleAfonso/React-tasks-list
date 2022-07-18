import React from "react";
import { useNavigate } from "react-router-dom";
import {BiPlus} from 'react-icons/bi';
import { useUserContext } from '../context/userContext';

// estilos
import '../styles/Header.css';

const Header = () => {
    const date = new Date();

    const monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const today = date.getDate();
    const month = date.getMonth();
    // context
    const { logoutUser } = useUserContext();

    // navigate ou navegação
    const navigate = useNavigate();

    // função que me leva pra rota de edicionar uma nova tarefa
    const handleAddTaskButton = () => {
        navigate('/add-task');
    }

    return (
        <>
            <div className="header">
                <div className="topHeader">
                    <h1>{monName[month]}, {today}</h1>
                    <button onClick={logoutUser} className="logout">Sair</button>
                </div>
                <div className="title-my-tasks">
                    <h1>Minhas Tarefas</h1>
                </div>
                <div className="div-button-add-task">
                    <button className="button-add-task" onClick={handleAddTaskButton}> <BiPlus /> Nova Tarefa</button>
                </div>
            </div>
        </>
    )
}

export default Header;