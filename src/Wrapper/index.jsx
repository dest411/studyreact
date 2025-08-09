import React from "react";
import './index.css';

const BoxShadowWrapper = (props) => {
   
    return (
        <div className='shadow'>
            {React.cloneElement(props.children, { logger })}
        </div>
    );
};

export default BoxShadowWrapper;