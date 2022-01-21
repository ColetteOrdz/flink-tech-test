// import { useState, useEffect } from "react";
// import axios from "axios";

// const useData = () => {
//   const [info, setInfo] = useState([]);

//   useEffect(() => {
//     getInfo();
//   }, []);

//   const getInfo = async () => {
//     const infoUsers = await axios
//       .get(
//         "https://flink-web-test.herokuapp.com/api/v1/getAllWaifusAndHusbandos"
//       )
//       .then((response) => response.data);

//     const { allWaifusAndHusbandos } = infoUsers;
//     const users = allWaifusAndHusbandos.map((user) => {
//       return {
//         img: user.image,
//         name: user.name,
//         gender: user.gender,
//         age: user.age,
//       };
//     });

//     const user = users.map((item) => item);
//     setInfo(user);
//   };

//   return { getInfo, info };
// };

// export default useData;
