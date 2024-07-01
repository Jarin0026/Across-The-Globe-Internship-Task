import React from 'react'
import google from "../images/google.svg";
import facebook from "../images/facebook.svg";
import connect from "../images/connect.svg";
import vector from "../images/Vector.svg";


function SignUp() {
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
      <div className='joinPara'>
        <p>By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></p>

      </div>
      <div className="joinBtn">
        <button>Agree and Continue</button>
      </div>
    </div>
  )
}

export default SignUp
