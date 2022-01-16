import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})