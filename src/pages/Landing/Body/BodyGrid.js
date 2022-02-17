import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../libs/loader";
import "./BodyGrid.css";
import Restaurant from "./Restaurant";

const BodyGrid = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     restaurants: [],
  //     loading: true,
  //   };
  // }

  const [restaurantsList, setRestaurantsList] = useState({
    restaurants: [],
    loading: true,
  });

  useEffect(() => {
    const url =
      "https://food-power.glitch.me/restaurants?limit=10&lastDeliveryTime=0";
    const imgBaseUrl =
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let restaurants = res.data.map((d) => {
          return {
            resName: d.name,
            imgUrl: imgBaseUrl + d.cloudinaryImageId,
            cuisines: d.cuisines.join(", "),
            rating: d.avgRating,
            costForTwo: d.costForTwoString,
            id: d.id,
          };
        });
        console.log(restaurants);
        setRestaurantsList({ restaurants, loading: false });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="BodyGrid">
      {restaurantsList.loading ? <Loader /> : null}
      {restaurantsList.restaurants.map((res) => {
        return (
          <div key={res.id}>
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
};

export default BodyGrid;
