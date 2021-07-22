import React from 'react'
import './Signup.css'
import SignupBox from './SignupBox'
import SignupButton from './SignupButton'

class SignupPage extends React.Component {
    render(){
        return (
            <div className="SignupPage">
                <h1>Sign up</h1>
                <p>or <span><a href="/">login to your account</a></span></p>
                <SignupBox /><br />
                <a href="/" style={{color: '#5d8ed5'}}>Have a referral code?</a>
                <SignupButton />
            </div>
        )
    }
}
export default SignupPage;