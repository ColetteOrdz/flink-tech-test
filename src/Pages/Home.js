import React from "react";
import Footer from "./Components/Footer";
import RegModal from "./RegModal";
import LogModal from "./LogModal";
import WhiteLogo from "../assets/logo-tinder-blanco.png";

import "./Components/Styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img src={WhiteLogo} alt="logo" />
        <div className="btn-container">
          <RegModal />
          <LogModal />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
