import React, { Component } from 'react' 
import {connect} from 'react-redux'
import {login} from '../../Redux/reducers/user'
//import "../Auth/Login.css"
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '', 
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.login(this.state)
            .then(() => {
                this.props.redirect()
            })
            .catch(err => {
                console.log('error loggin in', err)
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
            <div className='mission-statement'>
                <h1>Mission Statement:</h1>
                <h2>Why should a whole community individually spend thousands of dollars on products that are used once or twice a month and then stored for the other half of the year.  Forget all those lame push mowers and hand shoveling snow, for pennies on the dollar you can have access to the Cadillac of yard care equipment.  Not only will this save money but imagine all the hours saved slaving in the sun/cold. Subscribers can even offer up their own equipment and tools to share, the possibilities are endless.</h2>
            <div className='auth-container'>
                
                <form onSubmit={this.handleLogin} className='auth-form'>
                    <input
                        type='text'
                        value={this.state.email}
                        name='email'
                        onChange={this.handleChange}
                        placeholder='email'/>
                    <input
                        type='password'
                        value={this.state.password}
                        name='password'
                        onChange={this.handleChange}
                        placeholder='password'/>
                    <button>login</button>
                </form>
                <button onClick={this.props.toggle}>need to register?</button>
            </div>
            </div>
        )
    }
}

export default connect(null, {login})(Login)