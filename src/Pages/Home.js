import React from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/register">
        <button>Sign In</button>
      </Link>
    </>
  );
};

export default Home;
