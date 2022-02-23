import React, { PureComponent } from "react";
import AddButton from "./AddButton";
import "./Menu.css";

class Menu extends PureComponent {
  render() {
    const {
      restaurantInfo,
      menuName,
      price,
      cloudinaryImageId,
      menuImg,
      menuDes,
      menuIsVeg,
    } = this.props;
    return (
      <div className="Menu">
        <div className="Menu-details">
          <div className="menu-description">
            <div>
              <img
                style={{ width: "18px", height: "20px", marginBottom: "10px" }}
                src={
                  menuIsVeg === 1
                    ? "/assets/icons8-vegetarian-food-symbol-48.png"
                    : "/assets/icons8-non-vegetarian-food-symbol-48.png"
                }
                alt="veg-img"
              />
            </div>
            <div className="menu-name">{menuName}</div>
            <div className="menu-price">
              {"\u20B9"}
              {price / 100}
            </div>
            <div className="menu-des">{menuDes}</div>
          </div>
          <div className="menu-img">
            {cloudinaryImageId !== "" ? (
              <img src={menuImg} alt="img" />
            ) : (
              <div className="altImg"></div>
            )}

            <AddButton
              menuName={menuName}
              menuPrice={price}
              restaurantInfo={restaurantInfo}
            />
          </div>
        </div>

        <div>
          <hr className="hr-line" />
        </div>
      </div>
    );
  }
}
export default Menu;
