import React from "react";
import Tinder from "../../assets/tinder.png";
import Star from "../../assets/star.png";
import Chat from "../../assets/chat.png";
import User from "../../assets/user.png";

import "../Components/Styles/MainView.css"

const BottomNavigation = () => {
 
  return (
    <>
    <nav>
        <img className="nav-icons" src={Tinder} alt="Match"/>
        <img className="nav-icons" src={Star} alt="Favorites"/>
        <img className="nav-icons" src={Chat} alt="Chat"/>
        <img className="nav-icons" src={User} alt="My profile"/>
    </nav>
    </>
  );
};

export default BottomNavigation;
