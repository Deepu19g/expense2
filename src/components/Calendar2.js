import React,{useState} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';



export default class Calendar2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  
  
 
  handleDayClick(day) {
   this.setState({ selectedDay: day });
   this.props.nextclick(day);
   
  }

  render() {
    return (
      <div>
        
        <DayPicker 

          
          selectedDays={this.state.selectedDay}
          //onDayClick={this.props.handleDayClick} 
         onDayClick={this.handleDayClick}
         onMonthChange={this.props.nextclick}
        />
      
        {/*<p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day 👻'}
          </p>
          */}
        
        
      </div>
    );
  }
}
