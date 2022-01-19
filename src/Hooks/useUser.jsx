import axios from "axios";

const useUser = () => {
  // const [users, setUsers] = useState([])

  const signIn = async () => {
    return await axios({
      method: "post",
      url: "https://flink-web-test.herokuapp.com/api/v1/register",
      data: {
        email: "correo@correo.com",
        name: "name",
        lastName: "lastName",
        password: "password",
        preferredGender: "F",
        gender: "M",
        age: "20",
      },
    });

    // return await Axios.post('https://flink-web-test.herokuapp.com/api/v1/register', {email: "correo@correo.com", name: "name", lastName: "lastName",
    // password: "password", preferredGender: "F", gender: "M", age: "20" }
    // )
  };

  const logIn = async () => {
    return await axios({
      method: "post",
      url: "https://flink-web-test.herokuapp.com/api/v1/login",
      data: {
        email: "example@gmail.com",
        password: "123456789",
      },
    });
    //    return await axios.post('https://fake-server-burguer-queen.herokuapp.com/users', {
    //         email: "example@gmail.com",
    //             password: "123456789"
    //       })

    //setUsers(response.data)
  };

  // const logOut = () =>{

  // }

  return { signIn, logIn };
};

export default useUser;
