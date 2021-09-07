import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import SignupBox from './SignupBox'
import SignupButton from './SignupButton'

class SignupPage extends React.Component {
    render(){
        return (
            <div className="SignupPage">
                <Link to="/"><div className="exit">{'\u2715'}</div></Link>
                <h1>Sign up</h1>
                <p>or <span><Link to="/login">login to your account</Link></span></p>
                <SignupBox /><br />
                <a href="/" style={{color: '#5d8ed5'}}>Have a referral code?</a>
                <SignupButton />
            </div>
        )
    }
}
export default SignupPage;