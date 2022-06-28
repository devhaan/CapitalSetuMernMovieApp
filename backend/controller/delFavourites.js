const FavMovies = require("../model/fav_movies");
module.exports.delFav=(req, res) => {
    FavMovies.find(
      { $and: [{ uid: req.body.uid }, { id: req.body.id }] },
      (err, favItemUid) => {
        if (err) {
          console.log("notfound");
          return;
        }
  
        if (favItemUid.length !== 0) {
          let favu = favItemUid[0];
          
          FavMovies.findByIdAndDelete({ _id: favu._id }, (err, data) => {
            if (err) {
              console.log("fav not deleted ", err);
              return;
            }
            res.status(200).json({
              msg: "deleted fav",
            });
          });
        } else {
          console.log("duplicate");
        }
      }
    );
  }