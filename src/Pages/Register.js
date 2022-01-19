import React from "react";
import useUser from "../Hooks/useUser";

import "./Components/Styles/Forms.css";

const Register = () => {
  const { signIn } = useUser();

  const register = (e) => {
    e.preventDefault();
    signIn()
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <form onSubmit={(e) => register(e)} className="reg-form">
        <label>Name*</label>
        <input type="text" required/>
        <label>Last name</label>
        <input type="text" />
        <label name="email">Email*</label>
        <input type="email" placeholder="example@mail.com" required/>
        <label name="password">Password*</label>
        <input type="password" placeholder="Password" required/>
        <label>Gender</label>
        <select>
          <option>M</option>
          <option>F</option>
          <option>NB</option>
        </select>
        <label>Prefered gender</label>
        <select>
          <option>M</option>
          <option>F</option>
          <option>M/F</option>
        </select>
        <label>Age*</label>
        <input className="age-input" type="text" required/>
        <div className="btn-container">
          <button className="form-btn" type="submit">
            Sign in
          </button>
          <h6>By submitting this form you agree that you have read and accepted the site's legal note and privacy policy.</h6>
        </div>
      </form>
    </>
  );
};

export default Register;
