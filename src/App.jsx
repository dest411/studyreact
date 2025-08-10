import React, { useState } from 'react';
import './main.css'

const App = () => {

    const [isDark, setIsDark] = useState(true);
    const onClickHandler = () => {
        setIsDark(!isDark);
        console.log(setIsDark);
        
    };
    return (
        <div className={isDark ? 'dark' : 'light' } >
            <button onClick={onClickHandler}>Переключити тему</button>
        </div>
    );
};

export default App;