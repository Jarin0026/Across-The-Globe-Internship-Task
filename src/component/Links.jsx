import React from "react";
import fb from "../images/fb.svg";
import twitter from "../images/twitter.svg";
import insta from "../images/insta.svg";
import pin from "../images/pin.svg";
import gplus from "../images/gplus.svg";
import utube from "../images/utube.svg";
import tele from "../images/tele.svg";
import msg from "../images/msg.svg";

function Links() {
  return (
    
      <div className="category">
        <div>
          
          <ul>
          <p>Hobbycue</p>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          
          <ul>
          <p>How Do I</p>
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Clain Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
        </div>

        <div>
          
          <ul>
          <p>Quick Links</p>
            <li>Listings</li>
            <li>Blog Post</li>
            <li>Shop / Store</li>
            <li>Community</li>
          </ul>
        </div>

        <div className="social"> 
        <p>Social Media</p>
          <ul>
          
            <li>
              <img src={fb} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={insta} alt="" />
            </li>
            <li>
              <img src={pin} alt="" />
            </li>
            <li>
              <img src={gplus} alt="" />
            </li>
            <li>
              <img src={utube} alt="" />
            </li>
            <li>
              <img src={tele} alt="" />
            </li>
            <li>
              <img src={msg} alt="" />
            </li>
          </ul>
          <div className="invite">
            <p>Invite Friends</p>
            <input type="text" placeholder="Email Id"/>
            <button>Invite</button>
          </div>
        </div>
      </div>
  );
}

export default Links;
