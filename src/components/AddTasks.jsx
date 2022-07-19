import React, {useState} from 'react';
import { collection, addDoc, Timestamp, } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

// styles
import '../styles/AddTasks.css';

//imgs
import img from '../img/img7.jpg';

// componentes
import Button from './Button';
import Header from './HeaderAddTask';

const AddTasks = ({handleTaskEdition}) => {
    // states ou estados
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorDescription, setErrorDescription] = useState(false);

    // context
    const { user } = useUserContext();

    // navegação
    const navigate = useNavigate();

    //functions
    // função que adiciona uma nova tarefa na bd
    const handleAddTaskClick = async (e) => {
        e.preventDefault();
        try {
            if (title === "") {
                setErrorTitle(true);
                setErrorDescription(false);
            } else if (description === "") {
                setErrorTitle(false);
                setErrorDescription(true);
            } else {
                await addDoc( collection(db, 'tasks'), {
                    title: title,
                    description: description,
                    completed: completed,
                    userId: user.uid,
                    created: Timestamp.now()
                } );

                setTitle("");
                setDescription("");
                setCompleted("");

                // depois de criar uma tarefa, volta para a pagina principal
                navigate('/');
            }
        } catch (error) {
            console.log('error in handleAddTaskClick : ', error);
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
                    <img src={img} alt="img" className='img-add-task' />
                </div>
                <div className='form-add-task-container'>
                    <form className='form-add-task' name='AddTasks'>
                        <h2 className='form-title'>Cria uma nova tarefa !</h2>
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
                            <Button onClick={handleAddTaskClick}>Adicionar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddTasks;