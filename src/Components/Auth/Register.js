import React, { Component } from 'react'
import {connect} from 'react-redux'
import {register} from '../../Redux/reducers/user'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', 
            address: '',
            email: '', 
            password: ''
            
        }
    }

    handleRegister = e => {
        e.preventDefault()
        this.props.register(this.state)
            .then(() => {
                this.props.redirect()
            })
            .catch(err => {
                console.log('error registering', err)
            })
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className='auth-container'>
                <form  onSubmit={this.handleRegister} className='auth-form'>
                <input
                    type='text'
                    value={this.state.name}
                    name='name'
                    onChange={this.handleChange}
                    placeholder='Full Name...'/>
                <input
                    type='text'
                    value={this.state.address}
                    name='address'
                    onChange={this.handleChange}
                    placeholder='Address...'/>
                <input
                    type='text'
                    value={this.state.email}
                    name='email'
                    onChange={this.handleChange}
                    placeholder='Email...'/>
                <input
                    type='password'
                    value={this.state.password}
                    name='password'
                    onChange={this.handleChange}
                    placeholder='Password...'/>
                <button>Register</button>
                </form>
                <button onClick={this.props.toggle}>need to login?</button>
            </div>
        )
    }
}

export default connect(null, {register})(Register)