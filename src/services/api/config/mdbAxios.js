import axios from "axios";

const mdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_TOKEN}`,
  },
});
export default mdbAxios;
