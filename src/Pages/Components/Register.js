import React, {useState} from "react";
import axios from "axios";
//import { Navigate } from "react-router-dom";
//import useUser from "../../Hooks/useUser";

import "./Styles/Home.css";

const Register = () => {
  //const { signIn } = useUser();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [prefGender, setPrefGender] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const API_URL = "https://flink-web-test.herokuapp.com";

  const signIn = async () => {
    return await axios({
      method: "post",
      url: `${API_URL}/api/v1/register`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email: email,
        name: name,
        lastName: lastName,
        password: password,
        preferredGender: prefGender,
        gender: gender,
        age: age,
      }
    });
  };

  const register = (e) => {
    e.preventDefault();
    signIn()
      .then((response) => {
        console.log(response.data)
        // if(response.data.isLoggedIn === true){
        //   localStorage.setItem("user", response.data.isLoggedIn);
        //   <Navigate to="/main" />
        // }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <form onSubmit={(e) => register(e)} className="reg-form">
        <label>Name*</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required autoFocus/>
        <label>Last name</label>
        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        <label name="email">Email*</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="example@mail.com" required />
        <label name="password">Password*</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
        <label>Gender</label>
        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option>M</option>
          <option>H</option>
          <option>NB</option>
        </select>
        <label>Prefered gender</label>
        <select value={prefGender} onChange={(e)=>setPrefGender(e.target.value)}>
          <option>M</option>
          <option>H</option>
          <option>M/H</option>
        </select>
        <label>Age*</label>
        <input className="age-input" value={age} onChange={(e)=>setAge(e.target.value)} type="text" required />
        <div className="btn-container">
          <button className="form-btn" type="submit">
            Sign in
          </button>
          <h6>
            By submitting this form you agree that you have read and accepted
            the site's legal note and privacy policy.
          </h6>
        </div>
      </form>
    </>
  );
};

export default Register;
