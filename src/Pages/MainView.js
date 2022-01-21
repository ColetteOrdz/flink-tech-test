import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import BottomNavigation from "./Components/Nav";

const MainView = () => { 
  //Filtrar datos de acuerdo a la preferencia de género

  return (
    <>
      <Header />
      <Card />
      <BottomNavigation />
    </>
  );
};

export default MainView;
