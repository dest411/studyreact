import React from "react";
import './index.css';

const BoxShadowWrapper = (props) => {
    const logger = (d) => {
        console.log('Залогировано', d);
    }
    return (
        <div className='shadow'>
            {React.cloneElement(props.children, { logger })}
        </div>
    );
};

export default BoxShadowWrapper;