import React, { useEffect } from "react";

const Children = () =>{

    useEffect (() => {
        console.log('i am children');
        return () => {
            console.log('i am unmounting');
        }
    }, [] );
    
    return (
        <div>
            i am children
        </div>
    )
}
export default Children;