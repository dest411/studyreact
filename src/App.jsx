import React from 'react';
import './main.css'


const App = () => {

    const handleClick = (event) => {
        console.log('Hello',event);
        
    };

    return (
        <div className='test'>
            <input type="text" onChange={(event) =>{
                console.log('Input changed',event.target.value);
            }} />
            <button className='btn' onClick={handleClick}>Hello</button>
        </div>
    );
};

export default App;