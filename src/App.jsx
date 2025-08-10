import React, { useState } from 'react';
import './main.css'

const App = () => {

    // const [isDark, setIsDark] = useState(true);
    // const onClickHandler = () => {
    //     setIsDark(!isDark);
    //     console.log(setIsDark);
        
    // };
    // return (
    //     <div className={isDark ? 'dark' : 'light' } >
    //         <button className='btn' onClick={onClickHandler}>Переключити тему</button>
    //     </div>
    // );

    const [name, setName] = useState('');
    const [password, setPassword]= useState('');

    const onChangeName = (event) => {
        setName(event.target.value);
        
    };
    
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    };
    return (
        <div>
            <input type="text" onChange={onChangeName} />
            <input type="password" onChange={onChangePassword} />

            <p>Ваше ім'я: {name} </p>
            <p>Ваш пароль: {password} </p>
        </div>
    )

};

export default App;