import React from 'react'
import "./Header.css"

class SearchBox extends React.Component {
    render(){
        return (
            <div className="Search" aria-label="Open Sidebar">
                <div className="SearchBox">
                    Enter street name, area etc...
                    <div className="SearchButton">
                    FIND FOOD
                    </div>
                </div>
                </div>
        )
    }
    
}
export default SearchBox;
