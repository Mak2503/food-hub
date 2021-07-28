import React from 'react'

class SearchPage extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     input: ''
        // }
        // this.handleChange = this.handleChange.bind(this)
    }
    // handleChange(e){
    //     this.setState(
    //         input = e.target.value
    //     )
    // }
    render(){
        return (
            <div className="SearchPage">
                <input className="SearchBar" placeholder="Search for area, street name etc.."></input>
            </div>
        )
    }
}
export default SearchPage;
