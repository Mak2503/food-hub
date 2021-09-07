import React from 'react'
import SignupPage from '../SignUp/SignupPage'
import "./Login.css"
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    Router
  } from "react-router-dom";  
import LoginBox from "./LoginBox"
import LoginButton from "./LoginButton"

class LoginPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="LoginPage">
                <Link to="/"><div className="exit">{'\u2715'}</div></Link>
                <h1>Login</h1>
                <p>or <span><Link to="/signup">create an account</Link></span></p>
                <LoginBox />
                <LoginButton />
            </div>
        )
    }
}
export default LoginPage;
