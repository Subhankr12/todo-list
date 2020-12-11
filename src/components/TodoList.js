import React from 'react'

function TodoList(props) {
    const { text, index, onDeleteClick } = props;
    return (
        <div>
            <li className="todo-items"><p>{text}</p> <button className="delete-btn" onClick={() => onDeleteClick(index)}>DELETE</button></li>
        </div>
    )
}

export default TodoList;
