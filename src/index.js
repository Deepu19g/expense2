import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';



//const ReactCalender = ()=>{
 // const [date,setDate]=useState(new Date());
  
 // const onChange=date =>{
  //  setDate(date);
   
  //};
  
 //return(
 //  <div>
 // <Calendar
 // onChange={onChange}
 // value={date}
///>

//</div>

// )
 


  
//};

ReactDOM.render(
  <React.StrictMode>
    {/*<ReactCalender></ReactCalender>*/}
    <App />,
    
  </React.StrictMode>,
 
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
