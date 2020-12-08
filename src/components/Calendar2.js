import React, { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

function Calendar2(props) {
  const [selectedDay, setselectedDay] = useState();

  function handleDayClick(day) {
    setselectedDay(day);
    props.nextclick(day);
  }
  const birthdayStyle = `.DayPicker-Day--highlighted {
    background-color: orange;
    color: white;
  }`;
  
  const modifiers = {
    highlighted: props.highlight,
  };

  return (
    <div>
      <style>{birthdayStyle}</style>
      <DayPicker
        modifiers={modifiers}
        selectedDays={selectedDay}
        onDayClick={handleDayClick}
        onMonthChange={props.nextclick}
      />
    </div>
  );
}

export default Calendar2;
