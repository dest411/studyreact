import React, { useState } from 'react';
import Children from './Children';
import './main.css'

const App = () => {
    const [state, setState] = useState(false);
    const [count, setCount] = useState(0);

    const onClickHandler = () => {
        setState(!state);
    }

    const countHandler = () =>{
        setCount(count + 1);
    }
    const countHandlerr = () =>{
        setCount(count - 1);
    }
    
    return (
        <div>
            {count}
            <button onClick={countHandler} >+</button>
            <button onClick={countHandlerr} >-</button>
            <button onClick={onClickHandler} >swithc</button>
            {state ? <Children /> : null}
        </div>
    )

};

export default App;