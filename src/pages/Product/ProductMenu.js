import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Menu from "./Menu";
import "./Product.css"

class ProductMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      loading: true,
    };
  }

  componentDidMount() {
    const restaurantID = this.props.match.params.id;
    const url = `https://food-power.glitch.me/restaurant/${restaurantID}`;
    const imgBaseUrl =
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let menu = Object.values(res.data.menu.items).map((l) => {
          return {
            menuName: l.name,
            price: l.price,
            menuImg: imgBaseUrl + l.cloudinaryImageId,
            menuDes: l.description,
          };
        });
        this.setState({ menu })
      });
  }
  render() {
    return (
      <div className="ProductMenu">
        <div></div>
        <div>
          {this.state.menu.map((res) => {
            return (
              <div className="renderMenu">
                <Menu
                  menuName={res.menuName}
                  price={res.price}
                  menuImg={res.menuImg}
                  menuDes={res.menuDes}
                />
              </div>
            );
          })}
        </div>
        {/* <div><Cart /></div>  */}
      </div>
    );
  }
}
export default withRouter(ProductMenu);
