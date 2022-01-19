// import React from "react";
// import axios from "axios";

// const useUser = () => {
//   //const [user, setUser] = useState([])

//   // const [name, setName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [prefGender, setPrefGender] = useState("");
//   // const [gender, setGender] = useState("");
//   // const [age, setAge] = useState("");

//   const API_URL = "https://flink-web-test.herokuapp.com";

//   const signIn = async () => {
//     return await axios({
//       method: "post",
//       url: `${API_URL}/api/v1/register`,
//       data: {
//         // email: email,
//         // name: name,
//         // lastName: lastName,
//         // password: password,
//         // preferredGender: prefGender,
//         // gender: gender,
//         // age: age,
//       },
//     });

//     // return await Axios.post('https://flink-web-test.herokuapp.com/api/v1/register', {email: "correo@correo.com", name: "name", lastName: "lastName",
//     // password: "password", preferredGender: "F", gender: "M", age: "20" }
//     // )
//   };

//   const logIn = async () => {
//     return await axios({
//       method: "post",
//       url: `${API_URL}/api/v1/login`,
//       data: {
//         email: email,
//         password: password,
//       },
//     });
//     //    return await axios.post('https://fake-server-burguer-queen.herokuapp.com/users', {
//     //         email: "example@gmail.com",
//     //             password: "123456789"
//     //       })

//     //setUsers(response.data)
//   };

//   // const logOut = () =>{

//   // }

//   return { signIn, logIn };
// };

// export default useUser;
