import React, { Component } from "react";
import AddButton from "./AddButton";

class DemoRes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          id: 52001,
          menuName: "Pani Poori",
          price: 50,
          quantity: 0
        },
        {
          id: 52002,
          menuName: "Bhel Poori",
          price: 60,
          quantity: 0
        },
        {
          id: 52003,
          menuName: "Masala Poori",
          price: 70,
          quantity: 0
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.menuItems.map((d) => {
          return (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                }}
              >
                <div>{d.menuName}</div>
                <div>
                  {"\u20B9"}
                  {d.price}
                </div>
              </div>
              <div style={{ marginTop: "10px" }}>
                <AddButton menu={d} menuName={d.menuName} menuId={d.id} menuPrice={d.price} menuQuantity={d.quantity}/>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DemoRes;
