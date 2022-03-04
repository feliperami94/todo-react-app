import React from 'react';
import "./TodoItem.css"

function TodoItem(props) {
    return(
        <li className='TodoItemLi'>
            <span 
            className={`Icon IconCheck ${props.completed && 'Icon-check--active'}`}
            onClick={props.onCompleteButton}
            >✓</span> 
            <p className={`Todo-Item-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
            className='Icon Icon-delete'
            onClick={props.onDeleteButton}
            >X</span>
        </li>
    )
}

export { TodoItem };