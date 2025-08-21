import React, {useState} from 'react';
import Header from './Header';
import './main.css'

const App = () => {
    
    const [task, setTask] = useState('');
    const [tasksList, setTasksList] = useState([]);


    const handeChange = (event) => {
        setTask(event.target.value);
    }

    const addTask = () =>{
        if (task.trim() !== ''){
            setTasksList([...tasksList, task])
            setTask('');
        } else{
            console.log('Please enter a task');
        }
    }
    
    console.log(tasksList);
    

    const deleteTask = () =>{

    }

    return (
        <div>
            <Header/>
            <input onChange={handeChange} value={task} type="text"/>
            <button onClick={addTask}>Add task</button>
            <ul>
                {tasksList.map((task, index) => (
                    <li key={index}>{index} {task} <button onClick={deleteTask}>Delete task</button> </li>
                    
                ))}
            </ul>
            
        </div>
    )

};

export default App;