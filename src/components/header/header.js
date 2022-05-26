import React from "react";
import "./header.css";
import locationIcon from "./img/pin.png";
import favorite from "./img/favorite.png";
import cartIcon from "./img/cart.png";
import personIcon from "./img/user.png";
import emailIcon from "./img/mail.png";
import arrowIcon from "./img/arrow-white.png";
import arrowIconB from "./img/blueArrow.png";
import search from "./img/search.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="first-nav">
          <div className="left">
            <p className="title" href="">
              GrabOne
            </p>
          </div>
          <div className="right">
            <div style={{ color: "white" }}>
              <img src={locationIcon} className="icon" />
              <span style={{ position: "relative", bottom: "5px" }}>
                Auckland
              </span>
              <img
                style={{ marginLeft: "7px" }}
                src={arrowIcon}
                className="arrow"
              />
            </div>
            <div className="hide">
              <a href="#">
                <img src={favorite} className="icon" />
              </a>
              <a href="#">
                <img src={cartIcon} className="icon" />
              </a>
              <a href="#">
                <img
                  style={{ marginRight: "7px" }}
                  src={personIcon}
                  className="icon"
                />
                <img src={arrowIcon} className="arrow" />
              </a>
              <a href="#">
                <img
                  style={{ marginRight: "7px" }}
                  src={emailIcon}
                  className="icon"
                />
                <span style={{ position: "relative", bottom: "5px" }}>
                  Subscribe
                </span>
              </a>
            </div>
          </div>
        </nav>
        <nav className="seconde-nav">
          <ul>
            <li>
              Browse Categories <img src={arrowIconB} className="arrow" />
            </li>
            <li>What's New</li>
            <li>Trending</li>
            <li>For You</li>
            <li>Shop Products</li>
          </ul>
          <div className="search-div">
          Search GrabOne
          </div>
          <img src={search} />
          <input type="search" id="form1" class="form-control" />
        </nav>
      </header>
    </>
  );
};
export default Header;
