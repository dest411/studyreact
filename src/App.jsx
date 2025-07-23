import React from "react";
import './main.css'

const App = () => {
    let name = 'Alex';
    const age = 18;
    let attr;

    if (age === 18) {
        attr = 'good';
        name = 'Vadik';
    }else{
        attr = 'bad';
    }

    function test1() {
        if (age === 18) {
            
            return (
            <div className="test1" >
                dfgdgfd
                dfgdgfdfg


                dsfgsdg
            </div>

            );
        }
        else{
            return (
                <div className="test2" >
                    sdfsdf
                    sdsgsfd
                    sdfsdfsd
                </div>
            )
        }
    }

    return (
        <div>

           {/* <div className={attr} >
                {name}
           </div> */}

           {/* <div>
                {age === 18 ? 'good' : 'bad'}
           </div> */}
            
            {test1()}

        </div>
        
    );
};

export default App;