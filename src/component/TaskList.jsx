import React from "react";
import '../css/TaskList.css';

const TaskList = ({ tasksList, deleteTask }) => {
    return (
        <ul className="task-list">
            {tasksList.map((task, index) => (
                <li key={index}>{index +1 +'.'} {task}
                <button onClick={() => deleteTask(index) }>Delete task</button></li>
                    
            ))}
        </ul>
    )
}
export default TaskList;