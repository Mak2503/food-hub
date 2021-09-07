import React from "react";
import { Link } from "react-router-dom";
import "./BodyGrid.css";
import Restaurant from "./Restaurant";

class BodyGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
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
            cuisines: d.cuisines.join(", "),
            rating: d.avgRating,
            costForTwo: d.costForTwoString,
            id: d.id
          };
        });
        this.setState({ restaurants });
      });
  }

  render() {
    return (
      <div className="BodyGrid">
        {this.state.restaurants.map((res) => {
          return (
            <div>
              <Link to={`/restaurant/${res.id}`}>
                <Restaurant
                  imgUrl={res.imgUrl}
                  resName={res.resName}
                  cuisines={res.cuisines}
                  rating={res.rating}
                  costForTwo={res.costForTwo}
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default BodyGrid;
