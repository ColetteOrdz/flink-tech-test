import React from "react";
import { Link } from "react-router-dom";
import useUser from "../Hooks/useUser";

import "./Components/Styles/Forms.css";

const LogIn = () => {
  const { logIn } = useUser();

  const login = (e) => {
    e.preventDefault();
    logIn()
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <form onSubmit={(e) => login(e)} className="log-form">
        <label className="data-label">Email*</label>
        <input type="email" placeholder="example@mail.com" required/>
        <label className="data-label">Password*</label>
        <input type="password" placeholder="Password" required/>

        <div className="btn-container">
          <button className="form-btn" type="submit">
            Log in
          </button>
          <Link to="/register">
            <button>Don't have an accout? Sign In</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default LogIn;
