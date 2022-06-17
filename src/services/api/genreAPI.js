import mdbAxios from "./config/mdbAxios";
const genreAPI = {
  fetchAll: () => mdbAxios.get("/genre/movie/list"),
};
export default genreAPI;
