import axios from "axios";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
//import useData from "../../Hooks/useData";

import "../Components/Styles/CardItem.css";

const Card = () => {
  // const {getInfo, info} = useData();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const infoUsers = await axios
      .get(
        "https://flink-web-test.herokuapp.com/api/v1/getAllWaifusAndHusbandos"
      )
      .then((response) => response.data);

    const { allWaifusAndHusbandos } = infoUsers;
    const users = allWaifusAndHusbandos.map((user) => {
      return {
        img: user.image,
        name: user.name,
        gender: user.gender,
        age: user.age,
      };
    });

    const user = users.map((item) => item);
    setInfo(user);
  };

  return (
    <>
      <div className="card-container">
        {info.map((user) => (
          <CardItem
            key={user.name}
            img={user.img}
            name={user.name}
            gender={user.gender}
            age={user.age}
          />
        ))}
      </div>
    </>
  );
};

export default Card;
