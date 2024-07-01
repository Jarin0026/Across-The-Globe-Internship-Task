import React from "react";
import google from "../images/google.svg";
import facebook from "../images/facebook.svg";
import connect from "../images/connect.svg";
import vector from "../images/Vector.svg";

function Login() {
  return (
    <div className="login">
      <div className="continue">
        <div> <img src={google} alt="" /> </div>
        <div> <img src={facebook} alt="" /> </div>
        <div> <img src={connect} alt="" /> </div>
      </div>
      <div className="logInput">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
      </div>
      <div  className="logRemb">
        <div>
          <input type="checkbox" />
          <span>  Remember me</span>
        </div>
        <div>
          <img src={vector} alt="" />
          <span>   Forgot Password</span>
        </div>
      </div>
      <div className="logBtn">
        <button>Continue</button>
      </div>
    </div>
  );
}

export default Login;
