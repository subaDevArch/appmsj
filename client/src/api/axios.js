import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "production") {
  baseURL = "https://backend-msj.onrender.com/api";
} else {
  baseURL = "http://localhost:3000/api";
}

const instance = axios.create({
  baseURL: "https://backend-msj.onrender.com/api",
  //baseURL : "http://localhost:3000/api",
  withCredentials: true
});

export default instance;
