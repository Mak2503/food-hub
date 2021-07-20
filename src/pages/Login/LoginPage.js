import React from 'react'
import "./Login.css"

class LoginPage extends React.Component {
    render(){
        return (
            <div className="LoginPage">
                <h1>Login</h1>
                <p>or <span><a href="/" className="Signup-link">create an account</a></span></p>
            </div>
        )
    }
}
export default LoginPage;
