import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TodoList from './TodoList';

function TodoMain() {
    const [task, setTask] = useState("");
    const [newTask, setNewTask] = useState([]);
    const onTaskChange = (event) => {
        setTask(event.target.value);
    }
    const addTask = () => {
        setNewTask((prevTasks) => {
            return [...prevTasks, task]
        });
        setTask("");
    }

    const handleDeleteClick = (index) => {
        setNewTask((prevTasks) => {
            let duplicateTasks = [...prevTasks];
            duplicateTasks.splice(index, 1);
            return duplicateTasks;
        })
    }
    return (
        <div className='main_div'>
            <div className='center_div'>
                <h1>My Todo List</h1>
                <br/>
                <input type="text" value={task} placeholder="Add Tasks" onChange={onTaskChange}/>
                <Button className='newBtn' onClick={addTask}>
                    <AddIcon />
                </Button>
                <br />
                <ol>
                   {newTask.map((val, index)=> {
                        return <TodoList key={index} text={val} index={index} onDeleteClick={handleDeleteClick} />
                    })} 
                </ol>
            </div>
        </div>
    )
}

export default TodoMain;
