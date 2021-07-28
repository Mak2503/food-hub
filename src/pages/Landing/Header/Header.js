import React from 'react'
import SearchBox from './SearchBox'

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="Header">
                <h2>All restaurants delivering to  </h2>
                <p>Set exact location to find the right restaurants near you.</p>
                <SearchBox />
            </div>
        )
    }
}
export default Header;
