import React from 'react'
import axios from 'axios'
//import {connect} from 'react-redux'


class RequestCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            requests: []
        }
    }
    componentDidMount() {
        axios.get('/api/requests')
            .then(({data}) => {
                this.setState({
                    requests: data
                })
            })
            .catch(error => {
                console.log('Error getting requests', error)
            })
    }
    
    render(){
        const{product, name, address, request_start, request_end} = this.props
        return(
            <div className='request'>
                <h1>{product}</h1>
                <h1>{name}</h1>
                <h1>{address}</h1>
                <h1>{request_start}</h1>
                <h1>{request_end}</h1>

            </div>
        )
    }
}

export default RequestCard;