import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        subject:'',
        sent: false,
      }
    }
    formSubmit = (e) => {
      e.preventDefault()

      this.setState({
        buttonText: '...sending'
      })
      
      let data = {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message

      }

      axios.post('API_URI', data)
      .then( res => {
        this.setState({ sent: true}, this.resetForm())
      }).catch((error) => {
        console.log('Messsage not sent', error)
      })
    }

    resetForm = () => {
      this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent'
      })
    }
  
  render() {
   return(
     <div className="contact-main">
      
        <form action='/contact' id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
        </div>
        <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
        </div>
        <div>
        <label for="issue-type">Subject</label>
           <select id="issue-type" name="issue-type">
            <option value="select">Select one...</option>
            <option value="billing-question">Billing Question</option>
            <option value="customer-service">Customer Service</option>
            <option value="general-question">General Question</option>
       </select>
       </div>
      <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
   );
  }
  
  }
  
  export default Contact;