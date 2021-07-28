import React from 'react'
import { BrowserRouter as
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect
  } from 'react-router-dom'
import "./Header.css"
import SearchPage from './SearchPage'

class SearchBox extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     click: false
        // }
        // this.handleClick = this.handleClick.bind(this)
    }
    // handleClick(){
    //     this.setState({
    //         click: true
    //     })
    // }

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
