import React from 'react';

// estilos
import '../styles/Button.css';

const Button = ({ children, onClick }) => {
    return (
        <>
            <button onClick={onClick} className="add-task-button">
                {children}
            </button>
        </>
    )
}

export default Button;