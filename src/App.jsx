import React from "react";
import './main.css'

const App = () => {
    const name = 'Alex';
    const age = 18;
    let attr;

    if (age === 18) {
        attr = 'good';
    }else{
        attr = 'bad';
    }

    return (
        <div>
           <div className={attr} >
                {name}
           </div>
        </div>
        
    );
};

export default App;