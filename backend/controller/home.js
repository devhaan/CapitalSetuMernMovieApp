const axios = require("axios");
module.exports.home=(req, res) => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=6cd29475ab8f2a3d11afcc012f4e2f51&page=1"
      )
      .then((response) => {
        return res.json(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log("always executed");
      });
  }