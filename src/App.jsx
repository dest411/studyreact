import React, {useState} from 'react';
import Header from './component/Header';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import './css/main.css';

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
    const deleteTask = (index) =>{
        const newTaskList = (tasksList.filter((_, i) => i !== index));
        setTasksList(newTaskList);
    }

    return (
        <div className="app">
            <Header/>
            <TaskForm
                handeChange={handeChange}
                addTask={addTask}
                task={task}
            />
            <TaskList
                tasksList={tasksList}
                deleteTask={deleteTask}
            />
            
        </div>
    )

};

export default App;