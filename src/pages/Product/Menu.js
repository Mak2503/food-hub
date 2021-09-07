import React, { PureComponent } from "react";
import AddButton from "./AddButton";
import "./Product.css";

class Menu extends PureComponent {
  render() {
    const { menuName, price, menuImg, menuDes } = this.props;
    return (
      <div className="Menu">
        <div className="Menu-details">
          <div className="menu-description">
            <div className="menu-name">{menuName}</div>
            <div className="menu-price">
              {"\u20B9"}
              {price / 100}
            </div>
          </div>
          <div className="menu-img">
            <img src={menuImg} alt="img"/>
            <AddButton menuName={menuName} menuPrice={price}/>
          </div>
        </div>
        <div className="menu-des">{menuDes}</div>
        <div>
          <hr className="hr-line" />
        </div>
      </div>
    );
  }
}
export default Menu;
