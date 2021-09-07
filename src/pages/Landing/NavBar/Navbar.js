import React from 'react'
import LoginPage from '../../Login/LoginPage'
import './Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return (
            <div className="Navbar">
                <div className="Navbar-head">SWIGGY</div> 
                <div className="Navbar-page">
                    <ul className="Navbar-ul">
                        <li className="Navbar-li"><a href="/">Search</a></li>
                        <li className="Navbar-li"><a href="/">Offers</a></li>
                        <li className="Navbar-li"><a href="/">Help</a></li>
                        <li className="Navbar-li"><Link to="/login">Sign In</Link></li>
                        <li className="Navbar-li"><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>  
            </div>
        )
    }
}
export default Navbar;
