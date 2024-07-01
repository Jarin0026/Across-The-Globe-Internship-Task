import React from "react";
import add from "../images/Add.svg";

function Middle() {
  return (
    <div className="bg">
      <div className="mid">
        <div>
          <div className="midLogo">
            <img src={add} alt="" />
            <h4>Add your own</h4>
          </div>
          <p>
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <button>Add new</button>
        </div>
      </div>
    </div>
  );
}

export default Middle;
