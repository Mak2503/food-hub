import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Product.css";
import Navbar from "../Landing/NavBar/Navbar";

const Loader = () => (
  <div className="divLoader">
    <svg className="svgLoader" viewBox="0 0 100 100" width="8em" height="8em">
      <path
        stroke="none"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#FC8019"
        transform="rotate(179.719 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 51;360 50 51"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
);

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const restaurantID = this.props.match.params.id;
    const url = `https://food-power.glitch.me/restaurant/${restaurantID}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          resName: json.data.name,
          imgUrl: json.data.imageURL,
          cuisines: json.data.cuisines.join(", "),
          rating: json.data.avgRating,
          costForTwo: json.data.costForTwoMsg,
          locality: json.data.locality,
          city: json.data.city,
          totalRating: json.data.totalRatings,
          cost: json.data.costForTwo,
          loading: false,
        });
      });
  }

  render() {
    const {
      resName,
      imgUrl,
      cuisines,
      locality,
      city,
      rating,
      totalRating,
      cost,
      deliveryTime,
    } = this.state;
    return (
      <div className="Product">
        {this.state.loading ? <Loader /> : null}
        <div className="Product-header">
          <div className="Product-img">
            <img src={imgUrl} alt="" />
          </div>
          <div className="Product-content">
            <div className="Product-title">{resName}</div>
            <div className="Product-cuisines">{cuisines}</div>
            <div className="Product-cuisines">
              {locality}, {city}
            </div>
            <div className="Product-details">
              <div className="">
                <div className="Product-rating">
                  {"\u2605"} {rating}
                </div>
                <div className="Product-rating">
                  {deliveryTime ? deliveryTime : "-- mins"}
                </div>
                <div className="Product-rating">
                  {"\u20B9"}
                  {cost / 100}
                </div>
              </div>
              <div>
                <div className="Product-rating-msg">{totalRating}+ Ratings</div>
                <div className="Product-rating-msg">Delivery Time</div>
                <div className="Product-rating-msg">Cost for two</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Loader };
export default withRouter(Product);
