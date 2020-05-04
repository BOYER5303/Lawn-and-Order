import React, { Component } from 'react'
import axios from 'axios'
import RequestCard from './RequestCard'
import {Link, Redirect} from 'react-router-dom'
import './Calendar.css'

//import {SelectDate} from './SelectDate'
import {connect} from 'react-redux'
import {logout} from '../../Redux/reducers/user'

class Calendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            user: {},
            requests: [],
    
        }
        this.getRequests = this.getRequests.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    } 

    componentDidMount() {
        this.getRequests()
    }

    getRequests = () => {
        axios.get('/api/requests')
        .then(({data}) => {
            this.setState({
                requests: data
            })
            console.log(data)
        }).catch(err => console.log('Error getting request', err))
    }
    

    handleLogout = () => {
        this.props.logout()
            .then(({data}) => {
                this.setState({
                    user: data,
                    redirect: true
                })
            })
            .catch(error => {
                console.log('error logging out', error)
            })
    }


    render() {
        let {redirect} = this.state

        if (redirect) {
            return <Redirect to='/'/>
        }

        const mappedRequests = this.state.requests.map(item =>
    
            <RequestCard item={item}
            key={item.request_id}
            product={item.product}
            request_id={item.request_id}
            product_id= {item.product_id}
            user_id={item.user_id}
            name={item.name}
            address={item.address}
            request_start={item.request_start}
            request_end={item.request_end}
            getRequests = {this.getRequests}
            />
                )
        return (
            
                    <div className='dash-main'>     
                        <div>
                            <button onClick={this.handleLogout}>logout</button>
                            <Link to='/form' className='link'><button>add product</button></Link>

                        </div>
                        <section>
                            {mappedRequests}
                        </section>
                    </div>
                
        )
    
}}

const mapStateToProps = state => {
    let {data: user} = state.user
    return {user}
}

const mapDispatchToProps = {logout}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
