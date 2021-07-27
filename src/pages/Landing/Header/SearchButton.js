import React from 'react'

class SearchButton extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="SearchButton">
                <button type="submit">FIND FOOD</button>
            </div>
        )
    }
}
export default SearchButton;
