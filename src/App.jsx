import React, { useState } from 'react';
import Children from './Children';
import './main.css'

const App = () => {
    const [state, setState] = useState(false);

    const onClickHandler = () => {
        setState(!state);
    }

    return (
        <div>
            <button onClick={onClickHandler} >swithc</button>
            {state ? <Children /> : null}
        </div>
    )

};

export default App;