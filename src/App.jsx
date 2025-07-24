import React from "react";
import './main.css'

const App = () => {
    const array = [{hello : 'world'}, {hello: 'wordl2'}];

    const arrayReactElements = [];

    for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        arrayReactElements.push(
            <div>{obj.hello}</div>
        )
    }

    console.log(array);
    console.log(arrayReactElements);
    
    

    return (
        <div>
            {arrayReactElements}
        </div>
    )
};

export default App;