import React from "react";
import "./Banner.css";

class Banner extends React.Component {
  render() {
    return (
      <div className="Banner">
        <div className="Banner-head">All restaurants delivering to sdfsdf </div>
        <p className="Banner-text">
          Set location to find the right restaurants near you.
        </p>
        <div className="Search" aria-label="Open Sidebar">
          <div className="SearchBox">
            <div className="SearchText">Enter street name, area etc...</div>
            <div className="SearchButton">FIND FOOD</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
