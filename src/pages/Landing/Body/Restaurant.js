import React from 'react'
import './Restaurant.css'

class Restaurant extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            resName: '',
            imgUrl: ''
        }
    }
    render(){
        const link = "https://food-power.glitch.me/restaurant/25225"
        fetch(link)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    resName: json.data.name,
                    imgUrl: json.data.imageURL
                    })
            })
        return (
            <div className="Restaurant">
                <img className="resImg" src={this.state.imgUrl} alt="img" />
                <h2 className="resName">{this.state.resName}</h2>
            </div>
        )
    }
}
export default Restaurant;
