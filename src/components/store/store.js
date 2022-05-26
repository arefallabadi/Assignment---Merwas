import React from "react";
import pic from "./img/pic.jpg";
import heart from "./img/pic1.png";

import "./store.css";

const Store = () => {
  let card = [
    {
      pic: pic,
      name: "Pen Fishing Rod Reel",
      price1: 279,
      price2: 580,
      count: 261,
      free: true,
    },
    {
      pic: pic,
      name: "Pen Fishing Rod Reel",
      price1: 279,
      price2: 580,
      count: 261,
      free: false,
    },
    {
      pic: pic,
      name: "Pen Fishing Rod Reel",
      price1: 279,
      price2: 580,
      count: 261,
      free: true,
    },
    {
      pic: pic,
      name: "Pen Fishing Rod Reel",
      price1: 279,
      price2: 580,
      count: 261,
      free: false,
    },
  ];
  return (
    <>
      <div className="containers">
        <div className="header-div">
          <h3>Store</h3>
          <button>View more {`>`}</button>
        </div>

        <div className="box">
          {card.map((ele) => (
            <div class="card">
              <div className="des4 img-description">
                <p>{ele.name}</p>
              </div>
              <div className="iconz">
                <img src={heart} />
              </div>
              <img src={ele.pic} />
              {ele.free && <button className="btn">FREE DELIVERY</button>}
              <div class="container">
                <h5>{ele.name}</h5>
                <div className="sub-div">
                  <p style={{ marginTop: "30px", paddingBottom: "45px" }}>
                    {ele.count} bought
                  </p>
                  <div style={{ display: "flex" }}>
                    <p className="p3">${ele.price2}</p>
                    <div className="sub-div-2">
                      <p className="blue p2">from</p>
                      <p className="blue p">${ele.price1}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Store;
