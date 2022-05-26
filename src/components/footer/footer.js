import React from "react";
import youtube from "./img/youtube-symbol.png"
import instagram from "./img/instagram.png"
import twitter from "./img/twitter.png"
import facebook from "./img/facebook-logo.png"
import smartphone from "./img/smartphone.png"

import "./footer.css";

const Footer = () => {

    return (
        <>
        <div className="div-all">
            <div className="container-div">
                <div className="news-letterM">
                    <h6 className="headerP">Newsletter Signup</h6>
                    <p>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
                    <div className="emailElement">
                        <input type="email" placeholder="Enter email address" className="emailInputT" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="contactColumn">
                    <div className="followDiv">
                        <h6 className="headerP">Follow us on</h6>
                        <div className="iconDiv">
                            <img src={facebook} />
                            <img src={twitter} />
                            <img src={instagram} />
                            <img src={youtube} />
                        </div>
                        <h6 className="h6-Get">Get app exclusive deals</h6>
                        <div className="buttonDiv">
                            <button> <img className="icon" src={smartphone} /> Download Our App</button>
                        </div>
                    </div>
                    <div className="grabOne">
                        <h6 className="headerP">Grab One</h6>
                        <div className="grabMenu">
                            <h6>GrabOne Guarantee</h6>
                            <h6>Contact Us</h6>
                            <h6>About Us</h6>
                            <h6>Terms & Returns</h6>
                            <h6>Blog</h6>
                            <h6>Gift Cards</h6>
                        </div>
                    </div>

                    <div className="myAccount">
                        <h6 className="headerP">My Account</h6>
                        <div className="grabMenu">
                            <h6>My Account</h6>
                            <h6>My Cart</h6>
                            <h6>My Coupons</h6>
                            <h6>FAQ</h6>
                        </div>
                    </div>

                    <div className="merchants">
                        <h6 className="headerP">Merchants</h6>
                        <div className="grabMenu">
                            <h6>Run a Deal</h6>
                            <h6>Merchant Centre</h6>
                        </div>
                    </div>

                    <div className="newsletter">
                        <h6 className="headerP">Newsletter Signup</h6>
                        <p>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
                        <div className="emailElement">
                            <input type="email" placeholder="Enter email address" className="emailInputT" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                </div>


            </div>
                <div className="copyRight">
                    <div className="privacyDiv">
                        <h6>Privacy Policy</h6>
                        <p>© 2022 GrabOne Limited</p>
                    </div>
                </div>
                </div>
        </>
    )
}
export default Footer
