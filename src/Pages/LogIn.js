import React from "react";
import { Link } from "react-router-dom";
import useUser from "../Hooks/useUser";

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
      <form onSubmit={(e) => login(e)}>
        <label className="data-label">Email</label>
        <input type="email" placeholder="example@mail.com" />
        <label className="data-label">Password</label>
        <input type="password" placeholder="Password" />
        <button type="submit">Log in</button>
      </form>
      <Link to="/register">
        <button>Don't have an accout? Sign In</button>
      </Link>
    </>
  );
};

export default LogIn;
