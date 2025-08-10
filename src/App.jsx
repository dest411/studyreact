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

    // const [name, setName] = useState('');
    // const [password, setPassword]= useState('');

    const [data, setData] = useState({ name: '', password: '' });

    const onChangeName = (event) => {
        setData(prev => ({
            ...prev, // копіюємо старі значення
            name: event.target.value // змінюємо тільки name
        }));
    };

  const onChangePassword = (event) => {
        setData(prev => ({
            ...prev, // копіюємо старі значення
            password: event.target.value // змінюємо тільки password
        }));
    };
    return (
        <div>
            <input type="text" onChange={onChangeName} />
            <input type="password" onChange={onChangePassword} />

            <p>Ваше ім'я: {data.name} </p>
            <p>Ваш пароль: {data.password} </p>
        </div>
    )

};

export default App;