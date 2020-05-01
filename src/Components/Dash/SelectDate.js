import React from "react";
import DatePicker from "react-datepicker";
import axios from "axios"
 
import "react-datepicker/dist/react-datepicker.css";

 
class SelectDate extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
    startDate: new Date(),
    endDate: new Date()
  };

this.handleStart = this.handleStart.bind(this)
this.handleEnd = this.handleEnd.bind(this)
  }
 
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
  
  requestDate() {
    const user_id = this.props.users.user_id
    const name = this.props.users.name
    const address = this.props.users.address
    const product_id = this.props.products.product_id
    const request_start = this.state.startDate
    const request_end = this.state.endDate
    axios.post('/api/requests', {user_id, product_id, name, address, request_start, request_end}).then(()=> this.props.getRequests())
    .catch(error => console.log('Error creating request'))
  }
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
      <button className='request-input' onClick={() => {this.requestDate() }}>Submit</button>
    </>
    );
  }
}

export default SelectDate;

