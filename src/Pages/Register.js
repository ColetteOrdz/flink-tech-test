import React from "react";
import useUser from "../Hooks/useUser";

const Register = () => {
  const {signIn} = useUser();

  const register = (e) => {
    e.preventDefault()
    signIn()
    .then((response) => console.log(response))
    .catch((error) => console.log(error.message))
  };
  
  return (
    <>
      <form onSubmit={(e)=>register(e)}>
        <label className="data-label">Name</label>
        <input type="text" />
        <label className="data-label">Last name</label>
        <input type="text" />
        <label className="data-label" name="email">Email</label>
        <input type="email" placeholder="example@mail.com" />
        <label className="data-label" name="password">Password</label>
        <input type="password" placeholder="Password" />
        <label className="data-label">Gender</label>
        <select>
          <option>M</option>
          <option>F</option>
          <option>NB</option>
        </select>
        <label className="data-label">Prefered gender</label>
        <select>
          <option>M</option>
          <option>F</option>
          <option>M/F</option>
        </select>
        <label className="data-label">Age</label>
        <input className="age-input" type="text" />
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default Register;
