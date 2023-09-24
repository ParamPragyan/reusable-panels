import React from "react";
import "./SetPieces1.css";
import img1 from "../assets/ss1.png"

const SetPieces1 = () => {
  return (
    <div className="text-[#fff] bg-[#2b3448] flex flex-col justify-center items-center">
      <div className="promo" style={{ "--overlay-color": "light-green" }}>
        <div className="image-wrapper">
          <img className=""
            src={img1}
            alt=""
          />
        </div>
        <h2 className="title" data-cta="Get out there →">
          Nightlife
        </h2>
      </div>
    </div>
  );
};

export default SetPieces1;
