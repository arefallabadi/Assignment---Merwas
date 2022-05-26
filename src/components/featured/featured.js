import React from "react";
import pic from "./img/pic.jpg";
import heart from "./img/pic1.png";
import "./featured.css";

const Featured = () => {
  let card = [
    {
      pic: pic,
      name: "Luxury 5-Star Auckland Stay at Cordis",
      p1: "Cordis",
      city: "Auckland",
      price1: 279,
      price2: 580,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Luxury 5-Star Auckland Stay at Cordis",
      p1: "Cordis",
      city: "Auckland",
      price1: 279,
      price2: 580,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Luxury 5-Star Auckland Stay at Cordis",
      p1: "Cordis",
      city: "Auckland",
      price1: 279,
      price2: 580,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Luxury 5-Star Auckland Stay at Cordis",
      p1: "Cordis",
      city: "Auckland",
      price1: 279,
      price2: 580,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Luxury 5-Star Auckland Stay at Cordis",
      p1: "Cordis",
      city: "Auckland",
      price1: 279,
      price2: 580,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Luxury 5-Star Auckland Stay at Cordis",
      p1: "Cordis",
      city: "Auckland",
      price1: 279,
      price2: 580,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Luxury 5-Star Auckland Stay at Cordis",
      p1: "Cordis",
      city: "Auckland",
      price1: 279,
      price2: 580,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
    {
      pic: pic,
      name: "Luxury 5-Star Auckland Stay at Cordis",
      p1: "Cordis",
      city: "Auckland",
      price1: 279,
      price2: 580,
      count: 261,
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ex quos nammagnam suscipit, deleniti alias eum officia voluptatum harum, dolorem impedit aut natus beatae veniam architecto vero! In!",
    },
  ];

  return (
    <>
      <div className="containers">
        <div className="header-div">
          <h3>Featured Auckland deals </h3>
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
export default Featured;
