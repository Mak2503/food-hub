import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount(){
    const url =
      "https://food-power.glitch.me/restaurants?limit=10&lastDeliveryTime=0";
    const imgBaseUrl =
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let restaurants = res.data.map((d) => {
        return {
          resName: d.name,
          imgUrl: imgBaseUrl + d.cloudinaryImageId,
          resId: d.id
        }
      })
      this.setState({ restaurants }) 
    })
  }

  render(){
    return (
      <div className="Search">
        <input className="search-bar" type="text" placeholder="Search for Restaurants" />
        <Link to="/"><div className="esc">{'\u2715'}ESC</div></Link>
      </div>
    )
  }x
}
export default Search;
