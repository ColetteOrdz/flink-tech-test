import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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