import React from 'react'
import "./Header.css"
import { HashRouter, NavLink } from 'react-router-dom'
import StripeBtn from './Charge'

//import Contact from "../Contact"


const Header = () => {
    return (
        
		<HashRouter>
		<header className="header-main">

	<div className="header-limiter">

		<h1><a>Lawn<span>and</span><span>Order</span></a></h1>

		<nav>
			
			<a href="/">Home</a>
			<a href="/calender" className="selected">Calender</a>
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

export default Header