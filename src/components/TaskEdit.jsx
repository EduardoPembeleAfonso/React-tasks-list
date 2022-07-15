import React, { useState } from 'react';
import { collection, updateDoc, doc, Timestamp, } from 'firebase/firestore';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';

import '../styles/AddTasks.css';
import img from '../img/img7.jpg';

import Button from './Button';
import Header from './HeaderAddTask';

const TaskEdit = ({task}) => {
    // states
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorDescription, setErrorDescription] = useState(false);

    // parametros
    const { id } = useParams();

    //functions
    // função que edita uma tarefa
    const handleEditTaskClick = async (e) => {
        e.preventDefault();
        try {
            if (title === "") {
                setErrorTitle(true)
                setErrorDescription(false);
            } else if (description === ""){
                setErrorTitle(false);
                setErrorDescription(true)
            }
             else {
                setErrorTitle(false);
                setErrorDescription(false);
                await updateDoc( doc(db, 'tasks', id), {
                    title: title,
                    description: description,
                    created: Timestamp.now()
                } );
                setTitle("");
                setDescription("");
            }
        } catch (error) {
            console.log('error in handleEditTaskClick : ', error);
        }
    }

    // função que pega o valor do input
    const handleInputChange = (e) => {
        setTitle(e.target.value);
        console.log(title)
    }

    // função que pega o valor do textArea
    const handleTextareaChange = (e) => {
        setDescription(e.target.value);
        console.log(description)
    }

    return (
        <>
            < Header />
            <div className='add-task-container'>
                <div className='img-container'>
                    <img src={img} alt="" className='img-add-task' />
                </div>
                <div className='form-add-task-container'>
                    <form className='form-add-task' name='TaskEdit'>
                        <h2 className='form-title'>Editar Tarefa !</h2>
                        <nav className='form-nav'>
                            <label >Titulo</label>
                            <input
                            onChange={handleInputChange}
                            type="text"
                            value={title}
                            className="add-task-input"
                            />
                            <span className={ errorTitle ? 'error' : 'errorHidden'}>{errorTitle ? 'Por favor, digite um nome!' : ' '}</span>
                        </nav>
                        <nav className='form-nav'>
                            <label >Descrição</label>
                            <textarea 
                                value={description} 
                                className="add-task-textarea" 
                                onChange={handleTextareaChange} >
                            </textarea>
                            <span className={ errorDescription ? 'error' : 'errorHidden'}>{errorDescription ? 'Por favor, digite uma descriçao!' : ' '}</span>
                        </nav>
                        <div className='add-task-button-container'>
                            <Button onClick={handleEditTaskClick}>Adicionar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TaskEdit;