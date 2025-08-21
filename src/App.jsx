import React, {useState} from 'react';
import './main.css'

const App = () => {

    const [count, setCount] = useState(0);

    const plusCount = () =>{
        setCount(count +1);
    }
    const minusCount = () =>{
        setCount(count -1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={plusCount}>+</button>
            <button onClick={minusCount}>-</button>
            <button onClick={reset} >reset</button>
        </div>
    )

};

export default App;