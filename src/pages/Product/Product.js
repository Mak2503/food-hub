import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../libs/loader";
import "./Product.css";

const Product = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     scrolled: false,
  //   };
  // }
  const [menuItems, setMenuItems] = useState({
    loading: true,
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const changeNavbarSize = () => {
      if (window.scrollY >= 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", changeNavbarSize);
  }, []);

  useEffect(() => {
    const restaurantID = props.match.params.id;
    const url = `https://food-power.glitch.me/restaurant/${restaurantID}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMenuItems({
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
  }, []);

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
    loading,
  } = menuItems;

  return (
    <div className={scrolled ? "Product-scrolled" : "Product"}>
      {loading ? <Loader /> : null}
      <div className={scrolled ? "Product-header-scrolled" : "Product-header"}>
        <div className={scrolled ? "Product-img-scrolled" : "Product-img"}>
          <img src={imgUrl} alt="" />
        </div>
        <div
          className={scrolled ? "Product-content-scrolled" : "Product-content"}
        >
          <div
            className={scrolled ? "Product-title-scrolled" : "Product-title"}
          >
            {resName}
          </div>
          <div
            style={{ opacity: 0.7 }}
            className={
              scrolled ? "Product-cuisines-scrolled" : "Product-cuisines"
            }
          >
            {cuisines}
          </div>
          <div
            style={{ opacity: 0.7 }}
            className={
              scrolled ? "Product-cuisines-scrolled" : "Product-cuisines"
            }
          >
            {locality}, {city}
          </div>
          <div className="Product-details">
            <div className="">
              <div className="Product-rating">
                {"\u2605"} {rating}
              </div>
              <div style={{ opacity: 0.7 }} className="Product-rating-msg">
                {totalRating}+ Ratings
              </div>
            </div>
            <div
              className={
                scrolled ? "Product-rating-scrolled" : "Product-rating-details"
              }
            >
              <div className="Product-rating">
                {deliveryTime ? deliveryTime : "-- mins"}
              </div>
              <div style={{ opacity: 0.7 }} className="Product-rating-msg">
                Delivery Time
              </div>
            </div>
            <div>
              <div className="Product-rating">
                {"\u20B9"}
                {cost / 100}
              </div>
              <div style={{ opacity: 0.7 }} className="Product-rating-msg">
                Cost for two
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 80 ||
//     document.documentElement.scrollTop > 80
//   ) {
//     this.setState({ scrolled: true });
//   } else {
//     this.setState({ scrolled: false });
//   }
// }

export default withRouter(Product);
