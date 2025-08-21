import React from "react";
import '../css/TaskForm.css';

const TaskForm = ({ handeChange, addTask, task }) => {
    return(
        <div className="task-form">
            <input onChange={handeChange} value={task} type="text" placeholder="Enter a task..." />
            <button onClick={addTask}>Add task</button>
        </div>
    )
    
}
export default TaskForm;