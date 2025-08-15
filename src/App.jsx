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
            <button onClick={countHandler} >+</button>
            <button onClick={countHandlerr} >-</button>
            <button onClick={onClickHandler} >switch</button>
            {state ? <Children count={count} /> : null}
        </div>
    )

};

export default App;