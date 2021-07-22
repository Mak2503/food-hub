import React from 'react'

class SignupBox extends React.Component {
    render(){
        return (
            <div className="SignupBox">
                <input type="tel" placeholder="Phone Number"></input>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
            </div>
        )
    }
}
export default SignupBox;
