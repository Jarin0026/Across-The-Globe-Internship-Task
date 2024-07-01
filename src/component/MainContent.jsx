import React, { useState } from "react";
import people from "../images/Group 27.svg";
import Login from "./Login";
import SignUp from "./SignUp";

function MainContent() {
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitch = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="main">
      <div className="mainContainer">
        <div className="containerOne">
          <h1>
            Explore your <span className="hobby">hobby</span> or{" "}
            <span className="passion">passion</span>
          </h1>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <img src={people} alt="" />
        </div>
        <div>
          <div className="logSign">
            <div>
              <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
            <div>
              <button onClick={() => setShowLogin(false)}>Join in</button>
            </div>
          </div>
          {showLogin ? <Login /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
