import React from "react";
import BrianPicture from "../assets/pictures/brian.png";
import SamHoPicture from "../assets/pictures/SamHo.png";
import AngelPicture from "../assets/pictures/Angel.png";
import NahuelPicture from "../assets/pictures/Nahuel.png";

function Footer() {
  return (
    <div className="footer">
      <h3>Meet the Team!</h3>
      <div>
        <img src={NahuelPicture} className="dev" />
        <p>Nahuel Quimey Arjona Tennerini</p>
      </div>
      <div>
        <img src={AngelPicture} className="dev" />
        <p>Angel Kerridge</p>
      </div>
      <div>
        <img src={BrianPicture} className="dev" />
        <p>Brian Kwok</p>
      </div>
      <div>
        <img src={SamHoPicture} className="dev" />
        <p>Samuel Ho</p>
      </div>
    </div>
  );
}

export default Footer;
