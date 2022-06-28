const axios = require("axios");
module.exports.popular = (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=6cd29475ab8f2a3d11afcc012f4e2f51&language=en-US&page=2"
    )
    .then((response) => {
      console.log("popular done")
      return res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log("always executed");
    });
};
