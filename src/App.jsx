import React from 'react';
import './main.css'


const App = () => {

    const now = new Date();

    const handleClick = (event) => {
        console.log('Hello',event);
        
    };
    
    const onChangeHandler = (event) =>{
        console.log('Input changed', event.target.value);
        
    }

    return (
        <div className='test'>
            <input type="text" onChange={onChangeHandler} />
            <button className='btn' onClick={handleClick}>Hello</button>
            <h1>Current Date: {now.toLocaleTimeString()}</h1>
        </div>
        
    );
};

export default App;