import React from "react";
//import { Link } from "react-router-dom";
import Footer from "./Components/Footer";


import WhiteLogo from "../assets/logo-tinder-blanco.png";
import "./Components/Styles/Home.css";
import RegModal from "./Components/RegModal";
import LogModal from "./Components/LogModal";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img src={WhiteLogo} alt="logo" />
        <div className="btn-container">
          {/*<Link to="/login">
            <button className="main-bttns"></button>
          </Link>
           <Link to="/register">
            <button className="main-bttns">Sign In</button>
          </Link> */}
          <RegModal />
          <LogModal />
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
