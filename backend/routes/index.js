const express = require("express");

const router = express.Router();
//controllers
const loginUserController = require("../controller/loginUser");
const signupUserController = require("../controller/signupUser");
const delFavouritesController = require("../controller/delFavourites");
const addFavouritesController = require("../controller/addFavorites");
const fetchFavouritesController = require("../controller/fetchFavourites");
const homeController=require("../controller/home");
const latestController=require("../controller/latest");
const popularController=require("../controller/popular");



console.log("router is up");
//routes
router.get("/", homeController.home);
router.get("/latest", latestController.latest);
router.get("/popular", popularController.popular);
router.post("/login", loginUserController.login);
router.post("/signup", signupUserController.signup);
router.post("/delfav", delFavouritesController.delFav);
router.post("/addfav", addFavouritesController.addFav);
router.post("/favmovies", fetchFavouritesController.fetchFav);



module.exports = router;
