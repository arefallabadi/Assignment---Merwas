import React from "react";
import pic from "./img/pic.jpg";
import heart from "./img/pic1.png";
import "./restaurants.css";

const Restaurants = () => {
  let card = [
    {
      pic: pic,
      name: "Remuera Dining Experience for Two",
      p1: "Cordis",
      city: "Auckland",
      price1: 49,
      price2: 63,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Remuera Dining Experience for Two",
      p1: "Cordis",
      city: "Auckland",
      price1: 10,
      price2: 24,
      count: 21,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Remuera Dining Experience for Two",
      p1: "Cordis",
      city: "Auckland",
      price1: 20,
      price2: 30,
      count: 45,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Remuera Dining Experience for Two",
      p1: "Cordis",
      city: "Auckland",
      price1: 27,
      price2: 58,
      count: 211,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
  ];

  return (
    <>
      <div className="containers">
        <div className="header-div">
          <h3>Restaurants, Bars, Cafes </h3>
          <button>View more {`>`}</button>
        </div>

        <div className="box">
          {card.map((ele) => (
            <div class="card">
              <div className="des img-description">
                <p>{ele.dis}</p>
              </div>
              <div className="iconz">
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
                    <div className="sub-div-2 right">
                      <p className="blue p2 left">from</p>
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
export default Restaurants;
