import React from "react";
import pic from "./img/pic.jpg";

import "./collection.css";

const Collection = () => {
  let card = [
    {
      pic: pic,
      name: "Ugg collection",
      p1: "Multiple deals",
    },
    {
      pic: pic,
      name: "Vivo Hair & Beauty",
      p1: "Multiple deals",
    },
    {
      pic: pic,
      name: "South Island Getaways",
      p1: "Multiple deals",
    },
    {
      pic: pic,
      name: "Bedroom Essentials",
      p1: "Multiple deals",
    },
  ];

  return (
    <>
      <div className="containers">
        <div className="header-div">
          <h3>Collections</h3>
          <button>View more {`>`}</button>
        </div>
        <div className="box">
          {card.map((ele) => (
            <>
              <div>
                <div className="card div-white-2"></div>
                <div className="card div-white"></div>
                <div class="card width">
                  <div className="des2 img-description">
                    <p>{ele.name}</p>
                  </div>
                  <img src={ele.pic} />
                  <div class="container">
                    <div className="boxContent">
                      <h5>{ele.name}</h5>
                      <p>{ele.p1}</p>
                      <button>View Collections {`>`}</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Collection;
