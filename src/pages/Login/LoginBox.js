import React from 'react'

class LoginBox extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="LoginBox">
                <input type="tel" placeholder="Phone Number"></input>
            </div>
        )
    }
}
export default LoginBox;
