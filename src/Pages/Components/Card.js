import CardItem from "./CardItem";
import useData from "../Hooks/useData";


export const Card = () => {
    const info = useData();
    console.log(info)

//   const printUsers = (e) => {
//     e.preventDefault()
//     getInfo()
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error.message))
//   };

    //  const [info, setInfo] = useState([]);

//   useEffect(() => {
//     getInfo();
//   }, []);

//   const getInfo = async () => {
//     const url =
//       "https://flink-web-test.herokuapp.com/api/v1/getAllWaifusAndHusbandos";
//     const resp = await fetch(url);
//     const { allWaifusAndHusbandos } = await resp.json();

//     const allData = allWaifusAndHusbandos.map((data) => {
//       return {
//         img: data.image,
//         name: data.name,
//         gender: data.gender,
//         age: data.age,
//       };
//     });

//     const data = allData.map((item) => item);
//     console.log(data);
//     setInfo(data);
//   };

  return (
    <>
      <div>
        {info.map((user) => (
          <CardItem
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
