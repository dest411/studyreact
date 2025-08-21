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

    return (
        <div>
            <Header/>
            <input onChange={handeChange} value={task} type="text"/>
            <button onClick={addTask}>Add</button>
            <ul>
                {tasksList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )

};

export default App;