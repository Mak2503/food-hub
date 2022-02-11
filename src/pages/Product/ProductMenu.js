import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Menu from "./Menu";
import { groupBy } from "lodash";
import "./Product.css";
import ProductCategory from "./ProductCategory";

class ProductMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendedMenu: [],
      categorizedMenu: [],
    };
  }

  componentDidMount() {
    const restaurantID = this.props.match.params.id;
    const url = `https://food-power.glitch.me/restaurant/${restaurantID}`;
    const imgBaseUrl =
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    // fetching restaurant menu data
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let menu = Object.values(res.data.menu.items).map((l) => {
          return {
            menuId: l.id,
            menuName: l.name,
            price: l.price,
            menuImg: imgBaseUrl + l.cloudinaryImageId,
            cloudinaryImageId: l.cloudinaryImageId,
            menuDes: l.description,
            menuRecommended:
              l.recommended === 1 ? "recommendedMenu" : "notRecommendedMenu",
            menuCategory: l.category,
          };
        });
        // Used lodash.groupBy to group the menu according to recommended and other category
        const groupMenu = groupBy(menu, (data) => {
          return data.menuRecommended;
        });
        const menuCat = groupBy(menu, (data) => {
          return data.menuCategory;
        });

        this.setState({
          recommendedMenu: groupMenu.recommendedMenu,
          categorizedMenu: menuCat,
        });
      });
  }
  render() {
    const { categorizedMenu, recommendedMenu } = this.state;
    console.log(categorizedMenu, recommendedMenu);
    return (
      <div className="ProductMenu">
        <div className="menu-category-list">
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div style={{ margin: "10px 20px" }}>Recommended</div>
            <div className="menu-category-block"></div>
          </div>
          {Object.keys(categorizedMenu).map((data) => {
            return (
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <div style={{ margin: "10px 20px" }}>{data}</div>
                <div className="menu-category-block"></div>
              </div>
            );
          })}
        </div>
        <div style={{ borderLeft: "1px solid gray", padding: "20px 0px" }}>
          {/* Showing recommended menu list */}
          <div className="menu-category">
            <h2 style={{ margin: 0, fontSize: "32px" }}>Recommended</h2>
            <div
              style={{
                fontSize: "13px",
                color: "rgb(104 107 120)",
                marginTop: "5px",
                fontWeight: 600,
              }}
            >
              {recommendedMenu.length} ITEMS
            </div>
          </div>
          {recommendedMenu.map((data) => {
            return (
              <div>
                <Menu
                  menuName={data.menuName}
                  price={data.price}
                  cloudinaryImageId={data.cloudinaryImageId}
                  menuImg={data.menuImg}
                  menuDes={data.menuDes}
                />
              </div>
            );
          })}
          {/* Showing other category menu list */}
          {Object.entries(categorizedMenu).map(([key, value]) => {
            return (
              <div className="renderMenu" key={key}>
                <div className="menu-category">
                  <h2 style={{ margin: 0, fontSize: "32px" }}>{key}</h2>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgb(104 107 120)",
                      marginTop: "5px",
                      fontWeight: 600,
                    }}
                  >
                    {value.length} ITEMS
                  </div>
                </div>
                {value.map((data) => {
                  return (
                    <div className="" key={data.id}>
                      <Menu
                        menuName={data.menuName}
                        price={data.price}
                        cloudinaryImageId={data.cloudinaryImageId}
                        menuImg={data.menuImg}
                        menuDes={data.menuDes}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default withRouter(ProductMenu);
