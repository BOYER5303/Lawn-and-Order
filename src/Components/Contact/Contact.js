import React from 'react';
import axios from 'axios';
import './Contact.css'

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

          <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>

            <label className="message-name" htmlFor="message-name">Your Name</label>
            <input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

            <label className="message-email" htmlFor="message-email">Your Email</label>
            <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

            <div>
                <label htmlFor="issue-type">Subject</label>
                  <select id="issue-type" name="issue-type" onChange={e => this.setState({subject: e.target.value})}>
                    <option value="select">Select one...</option>
                    <option value="billing-question">Billing Question</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="general-question">General Question</option>
              </select>
              </div>
            <label className="message" htmlFor="message-input">Your Message</label>
            <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
            
            <div className="button-container">
                <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
            </div>
          </form>
      </div>
   );
  }
  
  }
  
  export default Contact;