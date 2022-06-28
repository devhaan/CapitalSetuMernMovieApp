const FavMovies = require("../model/fav_movies");

module.exports.addFav = (req, res) => {
  FavMovies.find(
    { $and: [{ uid: req.body.uid }, { id: req.body.id }] },
    (err, favlist) => {
      if (err) {
        console.log("notfound");
        return;
      }

      if (favlist.length === 0) {
        FavMovies.create(
          {
            uid: req.body.uid,
            id: req.body.id,
            backdrop_path: req.body.backdrop_path,
            title: req.body.title,
            overview: req.body.overview,
            release_date: req.body.release_date,
            vote_average: parseFloat(req.body.vote_average),
          },
          (err, newdb) => {
            if (err) {
              console.log(err, "Error in storing fav");
              return;
            } else {
              res.status(200).json({
                msg: "created successfully",
              });
            }
          }
        );
      } else {
        console.log("duplicate");
      }
    }
  );
};
