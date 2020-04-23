import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

 
class SelectDate extends React.Component {
  

    state = {
    startDate: new Date(),
    endDate: new Date()
  };
 
  handleStart = date => {
    this.setState({
      startDate: date
    });
  };

  handleEnd = date => {
    this.setState({
      endDate: date
    });
  };
 
  render() {
    return (
    <>  
      <h2>Requested start time:</h2>
      <DatePicker
      selected={this.state.startDate}
      onChange={this.handleStart}
      showTimeSelect
      dateFormat="Pp"/>
      <h2>Requested end time:</h2>
      <DatePicker
      selected={this.state.endDate}
      onChange={this.handleEnd}
      showTimeSelect
      dateFormat="Pp"/>
    </>
    );
  }
}

export default SelectDate;

