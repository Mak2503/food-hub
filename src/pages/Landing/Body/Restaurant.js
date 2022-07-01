import React, { useState } from "react";
import "./BodyGrid.css";

const Restaurant = (props) => {
  const { resName, cuisines, rating, costForTwo, imgUrl } = props;

  return (
    <div>
      <div className="Restaurant">
        <div className="resInner">
          <img className="resImg" src={imgUrl} alt="img" />
          <h2 className="resName">{resName}</h2>
          <p className="resCuisines">{cuisines}</p>
          <div className="resRatingGrid">
            <div>
              <span className="resRating">{rating}</span>
            </div>
            <div>{costForTwo}</div>
          </div>
        </div>
      </div>
      {/* The below component renders when the screen is below 500px ie, mobile */}
      <div className="Restaurant-mobile">
        <div>
          <img className="resImg-mobile" src={imgUrl} alt="img" />
        </div>
        <div style={{ width: "80%" }}>
          <div style={{ height: "50%" }}>
            <h2 className="resName-mobile">{resName}</h2>
            <div className="resCuisines-mobile">{cuisines}</div>
          </div>
          <div style={{ display: "flex", borderTop: "1px solid lightgray" }}>
            <div style={{ width: "20%", marginTop: "5px" }}>
              <span className="resRating-mobile">{rating}</span>
            </div>
            <span className="resCost-mobile">{costForTwo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
