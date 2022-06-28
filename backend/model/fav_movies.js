const mongoose = require("mongoose");

const FavoritesMovies = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  backdrop_path: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  vote_average: {
    type: Number,
    required: true,
  }
});

const FavMovies = mongoose.model("FavMovies", FavoritesMovies);

module.exports = FavMovies;
