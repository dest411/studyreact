import React from 'react';
import './main.css'

const App = () => {
    let isDark = false;
    const onClickHandler = () => {
        console.log(isDark);
        
        isDark = true;
    };
    return (
        <div className={isDark ? 'dark' : 'light' } >
            <button onClick={onClickHandler}>Переключити тему</button>
        </div>
    );
};

export default App;