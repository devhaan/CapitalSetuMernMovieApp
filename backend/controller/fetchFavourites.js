const FavMovies = require("../model/fav_movies");
module.exports.fetchFav = (req, res) => {
  FavMovies.find({ uid: req.body.uid }, (err, favmovies) => {
    if (err) {
      console.log(err, "Error in fetching data from database");
      return;
    } else {
      return res.json(favmovies);
    }
  });
};
