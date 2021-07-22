import React from 'react'
import './Navbar.css'

class Navbar extends React.Component {
    render(){
        return (
            <div className="Navbar">
                <h1>SWIGGY</h1> 
                <nav id="Navbar-page">
                    <ul className="navbar-ul">
                        <li className="navbar-li"><a href="/">Search</a></li>
                        <li className="navbar-li"><a href="/">Offers</a></li>
                        <li className="navbar-li"><a href="/">Help</a></li>
                        <li className="navbar-li"><a href="/">Sign In</a></li>
                        <li className="navbar-li"><a href="/">Cart</a></li>
                    </ul>
                </nav>  
            </div>
        )
    }
}
export default Navbar;
