import React from 'react';
import ReactDOM from 'react-dom/client';
import fd , { TEST1, TEST2 } from './test';
import Dog from './dog.jpg';
import './index.css';
import { hello } from './myfolder/hello';
import { hello2 } from './myfolder';
import App from './App';

console.log(hello, hello2);

console.log(fd);
console.log(TEST1,TEST2);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App></App>
    <div className='hello' >
      <img src={Dog}/>
    </div> 
    
  </React.StrictMode>
);
 
// import / export

// export const TEST = ....L
// export { TEST1, testFunction }
// > import { TEST } from './...';


// export default TEST;
// > import SFSDGSDGS from './....';