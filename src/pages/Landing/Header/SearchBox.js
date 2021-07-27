import React from 'react'
import "./Header.css"

class SearchBox extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="SearchBox">
                <input type="search" placeholder="Enter street name, area etc..."></input>
            </div>
        )
    }
    
}
export default SearchBox;
