import React, { PureComponent } from 'react'
import './Restaurant.css'

class Restaurant extends PureComponent {
    render(){
        const { resName, cuisines, rating, costForTwo, imgUrl } = this.props
        return (
            <div className="Restaurant">
                <div className="resInner">
                <img className="resImg" src={imgUrl} alt="img" />
                <h2 className="resName">{resName}</h2>
                <p className="resCuisines">{cuisines}</p>
                <div className="resRatingGrid">
                    <div>Rating: {rating}</div>
                    <div>{costForTwo}</div>
                </div>
                </div>
                </div>
        )
    }
}
export default Restaurant;
