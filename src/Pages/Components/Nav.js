import React from "react";
import Tinder from "../../assets/tinder.png";
import Star from "../../assets/star.png";
import Chat from "../../assets/chat.png";
import User from "../../assets/user.png";
import Swal from "sweetalert2";

import "../Components/Styles/MainView.css";

const BottomNavigation = () => {
  const favFn = () => {
    Swal.fire("Your Favorite section is empty.");
  };
  const chatFn = () => {
    Swal.fire("You don´t have any chat.");
  };

  return (
    <>
      <nav>
        <img className="nav-icons" src={Tinder} alt="Match" />
        <img className="nav-icons" onClick={favFn} src={Star} alt="Favorites" />
        <img className="nav-icons" onClick={chatFn} src={Chat} alt="Chat" />
        <img className="nav-icons" src={User} alt="My profile" />
      </nav>
    </>
  );
};

export default BottomNavigation;
