// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const useUser = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({});

//   //   const [name, setName] = useState("");
//   //   const [lastName, setLastName] = useState("");
//   //   const [password, setPassword] = useState("");
//   //   const [email, setEmail] = useState("");
//   //   const [prefGender, setPrefGender] = useState("");
//   //   const [gender, setGender] = useState("");
//   //   const [age, setAge] = useState("");

//   const API_URL = "https://flink-web-test.herokuapp.com";

//   const signIn = async ({
//     email,
//     name,
//     lastName,
//     password,
//     prefGender,
//     gender,
//     age,
//   }) => {
//     return await axios({
//       method: "post",
//       url: `${API_URL}/api/v1/register`,
//       data: {
//         email: email,
//         name: name,
//         lastName: lastName,
//         password: password,
//         preferredGender: prefGender,
//         gender: gender,
//         age: age,
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         console.log(response.data);
//         setUser(response.data);
//         // const result = response.data;
//         // if(response.data.isLoggedIn === true){
//         //   localStorage.setItem("user", JSON.stringify(result));
//         //   navigate("/main")
//         // }
//       })
//       .catch((error) => {
//         document.querySelector(".error").innerHTML = `${error.message}`;
//       });
//     
//   };

//   const logIn = async ({ email, password }) => {
//     return await axios({
//       method: "post",
//       url: `${API_URL}/api/v1/login`,
//       data: {
//         email: email,
//         password: password,
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         console.log(response.data);
//         const result = response.data;
//         if (response.data.isLoggedIn === true) {
//           localStorage.setItem("user", JSON.stringify(result));
//           navigate("/main");
//         }
//         setUser(result);
//       })
//       .catch((error) => {
//         document.querySelector(".error").innerHTML = `${error.message}`;
//       });


//     //setUsers(response.data)
//   };

//   const logOut = () => {
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   return { signIn, logIn, logOut, user };
// };

// export default useUser;
