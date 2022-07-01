import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../libs/loader";
import "./BodyGrid.css";
import Restaurant from "./Restaurant";

const BodyGrid = () => {
  const [restaurantsList, setRestaurantsList] = useState({
    restaurants: [],
    loading: true,
  });
  const imgBaseUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  useEffect(() => {
    const url = `https://food-power.glitch.me/restaurants?limit=10&lastDeliveryTime=0`;
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
      <div className="Body-header-mobile">
        <h2 style={{ fontSize: "17px", margin: "0px" }}>
          About the food culture in the Marathahalli
        </h2>
        <p style={{ fontSize: "12px", color: "#535665" }}>
          Order food & beverages online from restaurants near & around you. We
          deliver food from your neighbourhood local joints, your favourite
          cafes, luxurious & elite restaurants in your area. Exciting bit? We
          place no minimum order restrictions! Order in as little (or as much)
          as you'd like. We'll Foody it to you!
        </p>
        <h2
          style={{ fontSize: "17px", marginTop: "30px", marginBottom: "10px" }}
        >
          Popular restaurants in and around Marathahalli
        </h2>
      </div>
      {restaurantsList.loading ? <Loader /> : null}
      {restaurantsList.restaurants.map((res) => {
        return (
          <div key={res.id}>
            <Link
              to={`/restaurant/${res.id}`}
              style={{ textDecoration: "none" }}
            >
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
      {/* <div style={{ width: "100%", display: "flex" }}>
        <div
          onClick={() => changeRestaurantList(29)}
          style={{ width: "30px", height: "20px", cursor: "pointer" }}
        >
          1
        </div>
        <div
          onClick={() => changeRestaurantList(31)}
          style={{ width: "30px", height: "20px", cursor: "pointer" }}
        >
          2
        </div>
      </div> */}
    </div>
  );
};

export default BodyGrid;
