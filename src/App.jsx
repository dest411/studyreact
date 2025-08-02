import React from "react";
import './main.css'


const USERS = [
    { name: 'Alex' },
    { name: 'John' },
    { name: 'Bob' },

];

const App = () => {
  

    return (
        <div>
            {USERS.map((user) => (
                <p key={user.name} > {user.name} </p>
            ))}
        </div>
    )
};

export default App;