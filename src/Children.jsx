import React, { useEffect, useState } from "react";

const Children = (props) =>{

    const [delivery, setDelivery] = useState(false);

    useEffect(() => {
        if (props.count >= 10) {
            setDelivery(true);
        }else{
            setDelivery(false);
        }}, [props.count]);
    
    return (
        <div>
            i am children {props.count}
            {delivery ? <p>Вам доступна знижка</p> : null} 
        </div>
    )
}
export default Children;