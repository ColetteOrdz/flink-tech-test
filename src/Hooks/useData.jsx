import axios from "axios";
import { useState, useEffect } from "react";

const useData = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const url =
      "https://flink-web-test.herokuapp.com/api/v1/getAllWaifusAndHusbandos";
    const resp = await axios.get(url);
    const { allWaifusAndHusbandos } = await resp.json();

    const allData = allWaifusAndHusbandos.map((data) => {
      return {
        img: data.image,
        name: data.name,
        gender: data.gender,
        age: data.age,
      };
    });

    const data = allData.map((item) => item);
    console.log(data);
    setInfo(data);
  };

  return { getInfo, info };
};

export default useData;
