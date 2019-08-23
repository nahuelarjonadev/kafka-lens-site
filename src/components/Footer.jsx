import React from "react";
import BrianPicture from "../assets/pictures/brian.png";
import SamHoPicture from "../assets/pictures/SamHo.png";
import AngelPicture from "../assets/pictures/Angel.png";
import NahuelPicture from "../assets/pictures/Nahuel.png";

function Footer() {
  return (
    <div className="footer">
      <h3>Meet the Team!</h3>
      <div className="profilePic">
        <img src={NahuelPicture} className="dev" alt="Nahuel Quimey Arjona Tennerini"/>
        <p>Nahuel Quimey Arjona Tennerini <br></br><a className="linkedin" href="https://www.linkedin.com/in/nahuel-quimey-arjona-tennerini/">@Nahuel</a></p>
      </div>
      <div className="profilePic">
        <img src={AngelPicture} className="dev" alt="Angel Evelyn Kerridge"/>
        <p>Angel Evelyn Kerridge <br></br><a className="linkedin" href='https://www.linkedin.com/in/angelkerridge/'>@Angel</a></p>
      </div>
      <div className="profilePic">
        <img src={BrianPicture} className="dev" alt="Brian Kwok"/>
        <p>Brian Kwok<br></br><a className="linkedin" href="https://www.linkedin.com/in/briankwok15/">@Brian</a></p>
      </div>
      <div className="profilePic">
        <img src={SamHoPicture} className="dev" alt="Samuel Ho"/>
        <p>Samuel Ho<br></br><a className="linkedin" href="https://www.linkedin.com/in/samdho/">@Samuel</a></p>

      </div>
    </div>
  );
}

export default Footer;
