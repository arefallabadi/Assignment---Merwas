import React from "react";
import firstPic from "./img/pic_1.png";
import firstBox from "./img/1.jpg";
import secondBox from "./img/2.jpg";
import heart from "./img/pic1.png";

import "./home.css";

const Home = () => {

  let secondDiv = [
    { name: "Featured Auckland deals", num: 290 },
    { name: "Collections", num: 44 },
    { name: "Activities, Events & Outdoors", num: 260 },
    { name: "Picked for you", num: "" },
    { name: "Store", num: 4979 },
    { name: "Restaurants, Bars, Cafes", num: 20 },
    { name: "Beauty, Massage & Spa", num: 385 },
    { name: "House & Garden", num: 2444 },
    { name: "Fitness & Sports", num: 276 },
    { name: "Automotive", num: 166 },
  ];

  let card = [
    {
      pic: firstBox,
      name: "Luxury 5-Star Auckland Stay at Cordis",
      p1: "Cordis",
      city: "Auckland",
      price1: 279,
      price2: 580,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: secondBox,
      name: "BasicCare 35-Point Service &195.00",
      p1: "Honda Stores Aukland",
      city: "Auckland",
      price1: 195,
      price2: 270,
      count: 2,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
  ];
  return (
    <>
      <div className="homeContainer">
        <div className="firstDiv">
          <img src={firstPic} className="firstPic" />
          <p className="p-home">
            For savings on big brands you love,<div>register here.</div>
          </p>
        </div>
        <div className="secondDiv">
          <div className="discover">
            <h3>Discover</h3>
            <div className="discoverParagraph">
              {secondDiv.map((ele) => (
                <>
                  <div className="paragraphProp">
                    <p>{ele.name}</p>
                    <p className="stock">{ele.num}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          {card.map((ele) => (
            <div class="card">
              <div className="img-description">
                <p>{ele.dis}</p>
              </div>
              <div id="icon" className="iconz iconzz">
                <img src={heart} />
              </div>
              <img src={ele.pic} />
              <div class="container">
                <h5>{ele.name}</h5>
                <p className="blue up">{ele.p1}</p>
                <p className="up">{ele.city}</p>
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

        <div className="message-container">
          <div className="messageHeader">
            <h4>Get the best deals delivered direct to your inbox each day</h4>
          </div>
          <div className="messageElement">
            <input
              type="email"
              placeholder="Enter email address"
              className="emailInput"
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
