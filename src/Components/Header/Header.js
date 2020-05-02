import React, {useEffect} from 'react'
import "./Header.css"
import { HashRouter, NavLink } from 'react-router-dom'
import StripeBtn from './Charge'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//import Contact from "../Contact"


const Header = (props) => {

	useEffect(() => {
		if (!props.user && props.location.pathname !== '/')
		{
			props.history.push('/')
		}
	}, [props.user, props.location.pathname] )

    return (
        
		<HashRouter>
		<header className="header-main">

	<div className="header-limiter">

		<h1><a>Lawn<span>and</span><span>Order</span></a></h1>

		<nav>
			
			<NavLink to ="/dash">Home</NavLink>
			<NavLink to ="/calendar" className="selected">Calendar</NavLink>
			<NavLink to ="/contact">Contact</NavLink>
			

			
		</nav>

		<ul>
			<StripeBtn/>
		</ul>
		
	</div>

</header>
</HashRouter>
    )
}
const mapStateToProps = state => {
    let {data: user} = state.user
    return {user}
}

export default connect(mapStateToProps)(withRouter(Header))