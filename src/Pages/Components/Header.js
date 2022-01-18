import React from "react";
import { Link } from "react-router-dom";
import WhiteLogo from "../../assets/logo-tinder-blanco.png";

const Header = () => {
  return (
    <>
      <div className="main-header" bg-color="black">
        <Link to="/">
          <img src={WhiteLogo} alt="Logo" width="30%"></img>
        </Link>
      </div>
    </>
  );
};

export default Header;
