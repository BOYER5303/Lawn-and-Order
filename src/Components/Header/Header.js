import React from 'react'
import "./Header.css"
import { HashRouter, NavLink } from 'react-router-dom'
//import Contact from "../Contact"


const Header = () => {
    return (
        
		<HashRouter>
		<header className="header-main">

	<div className="header-limiter">

		<h1><a href="#">Lawn<span>and</span><span>Order</span></a></h1>

		<nav>
			
			<a href="/">Home</a>
			<a href="/calender" className="selected">Calender</a>
			<NavLink to ="/contact">Contact</NavLink>
			

			
		</nav>

		<ul>
			<li><a href="#">Subscribe</a></li>
		</ul>
		{/* <div className='transition'>
                <h1>PRODUCTS</h1>
            </div> */}
	</div>

</header>
</HashRouter>
    )
}

export default Header