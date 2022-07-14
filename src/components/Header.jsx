import React from "react";
import { useNavigate } from "react-router-dom";
import {CgAddR} from 'react-icons/cg';
import {MdDeleteForever} from 'react-icons/md';
import { useUserContext } from '../context/userContext';

// estilos
import '../styles/Header.css';

const Header = () => {
    // context
    const { user, logoutUser } = useUserContext();

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
                    <h1>{ user.email }</h1>
                    <button onClick={logoutUser} className="logout">Sair</button>
                </div>
                <div className="title-my-tasks">
                    <h1>Minhas Tarefas</h1>
                </div>
                <div className="div-button-add-task">
                    <button className="button-add-task"> <MdDeleteForever /> </button>
                    <button className="button-add-task" onClick={handleAddTaskButton}> <CgAddR /> </button>
                </div>
            </div>
        </>
    )
}

export default Header;