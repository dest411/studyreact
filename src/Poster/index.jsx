import React from 'react';
const Poster = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.name} />
            <h2>{props.name}</h2>

            {typeof props.description === 'string' && (
                <h4>{props.description}</h4>
            ) }
        </div>
    );
};

export default Poster;