import React from "react";
import { Link } from "react-router-dom";
import DegLogo from "../../assets/logo-tinder-deg.png";
import Logout from "../../assets/logout.png"

import "./Styles/MainView.css"

const Header = () => {
  return (
    <>
      <div className="main-header">
        <Link to="/main">
          <img className="main-logo" src={DegLogo} alt="Logo" ></img>
          <img className="log-out" src={Logout} alt="Log out" ></img>
        </Link>
      </div>
    </>
  );
};

export default Header;
