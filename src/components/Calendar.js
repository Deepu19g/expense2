import React,{useState}from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';



function Calendar(props) {
    const [selectedDay,setit] =useState(null)
    
       function handleDayClick(day, { selected }) {
        if (selectedDay.selected)
        {
          setit(undefined)
        }
        else{
        setit(day);
        }
        console.log("working day")
          
        alert("working")
        
      }
 
    return (
         
        <div>
          <DayPicker
          selectedDays={selectedDay}
          onDayClick={handleDayClick,props.nextday}
        />
        <p>
          {selectedDay
            ? selectedDay.toLocaleDateString()
            : 'Please select a day 👻'}
        </p>
        
        </div>
    )
}

export default Calendar
