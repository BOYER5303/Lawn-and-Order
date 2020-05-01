import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'


class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            requests: []
        }
    }
    componentDidMount(){

        this.getRequests()
    }
    getRequests(){
        //const id = this.props.requests
        axios.get(`/api/requests`).then(res => {
            this.setState({
                requests: res.date
            })
        }).catch(error => console.log('Error retrieving requests', error))

    }
    render() { 
        const mappedRequests = this.props.requests.map((request, index)=> {
            //const {}
        return ( 
                <div>
                    <h1>Calendar</h1>
                </div>
           // })
         );
    }
}
}
export default Calender;