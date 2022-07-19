import React, {useState} from 'react';
import Modal from 'react-modal';
import Lottie from 'react-lottie';
import { deleteDoc, updateDoc, doc} from 'firebase/firestore';
import { db } from '../firebase';
import {useNavigate} from 'react-router-dom';

// icones
import { CgClose, CgInfo, CgPen } from 'react-icons/cg';

// Lottie json
import deleteLottie from '../lottie/61000-loading-sucess.json';

// estilos
import "../styles/Task.css";
import "../styles/TaskDetails.css";

const Task = ({ task }) => {
    // states
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [autoplay, setAutoPlay] = useState(false);

    // navigate e params
    const navigate = useNavigate();

    // opções do lottie
    const lottieOptions = {
        loop: false,
        autoplay: autoplay,
        animationData: deleteLottie
      }

    // função que chama o modal
    const handleTaskDetailsClick = () => {
        setModalIsOpen(true);
    }

    // função que apaga uma tarefa
    const handleTaskDelete =  (taskId) => {
        const id = taskId;
        const taskDoc = doc(db, 'tasks', id);
        try {
            setAutoPlay(true);
            setTimeout(() => deleteDoc(taskDoc), 3300);
        } catch (error) {
            console.log('error in handleTaskDelete : ', error);
        }

    }

    // função que me leva pra rota de editar uma tarefa
    const handleTaskEdit = (taskId) => {
        navigate(`/edit-task/${taskId}`)
    }
    
    // função que marca / desmarca uma tarefa como concluida
    const handleTaskClick = async (taskId, completed) => {
        try {
            if ( completed === true ) {
                await updateDoc( doc(db, 'tasks', taskId), {
                    completed: false
                } )
            } else {
                await updateDoc( doc(db, 'tasks', taskId), {
                    completed: true
                } )
            }
        } catch (error) {
            console.log('error in handleTaskClick : ', error);
        }
        }


    // função que fecha o modal
    const handleClickCloseModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div
            className="task-container"
            style={ task.data.completed ? completedTrue : completedFalse }
        >
            <div className='task-title' onClick={ () => handleTaskClick(task.id, task.data.completed) }>
                {task.data.title}
            </div>

            <div className='button-container'>
                <button className="see-task-details-button" onClick={ handleTaskDetailsClick } > <CgInfo /> </button>
                <button className="see-task-details-button" onClick={ () => handleTaskEdit(task.id) } > <CgPen /> </button>
                <button className='remove-task-button' onClick={ () => handleTaskDelete(task.id) }> 
                   { autoplay ? <Lottie options={lottieOptions} width={50} height={50} /> :  <CgClose />  }
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                closeTimeoutMS={100}
                ariaHideApp={false}
            >
                <div className='details-container'>
                    <div className='close-button-container'>
                        <button onClick={handleClickCloseModal}> <CgClose /> </button>
                    </div>
                    <div className='task-details-container'>
                        <h2> {task.data.title }</h2>
                        <p> {task.data.description} </p>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

//styles

const completedTrue = {
    borderLeft: '6px solid #07f547',
}
const completedFalse = {
    borderLeft: '6px solid red',
}

// styles do modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '5px',
      outline: 'none',
      padding: '20px',
      width: '50%',
      backgroundColor: 'rgb(241, 238, 238)',
    }
  };

export default Task;