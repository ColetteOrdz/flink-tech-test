import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DegLogo from "../../assets/logo-tinder-deg.png";
import Logout from "../../assets/logout.png";

import "./Styles/MainView.css";

const Header = () => {
  const navigate = useNavigate();

  //Corregir la función logOut
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div className="main-header">
        <Link to="/main">
          <img className="main-logo" src={DegLogo} alt="Logo"></img>
        </Link>
        <img
          className="log-out"
          onClick={(e) => logOut(e)}
          src={Logout}
          alt="Log out"
        ></img>
      </div>
    </>
  );
};

export default Header;
