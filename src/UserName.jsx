import React from 'react';

const UserName = (props) => {
    console.log(props);
    
    return (
        props.userAge > 20 ? (
            <p className='dsfsdfs'> 
                {props.userName}
                <button  >Змінити ім'я</button>            
            </p>
        ): (
            <p className='safsd' >{props.userName} {props.userSurname}</p>
        )
    );
};
export default UserName;