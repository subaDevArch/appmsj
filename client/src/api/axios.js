import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "production") {
  baseURL = "https://backend-msj.onrender.com/api";
} else {
  baseURL = "http://localhost:3000/api";
}

const instance = axios.create({
  baseURL: "https://preceptor.eidfs.unsj.edu.ar/api/",
  //baseURL : "http://190.124.224.159:3000/api/",
 //baseURL : "http://localhost:3000/api/",
  withCredentials: true
});

export default instance;
