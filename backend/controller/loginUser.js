const User = require("../model/user_credential");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports.login = (req, res) => {
  User.find({ username: req.body.username }, (err, userDetails) => {
    if (err) {
      console.log(err, "Error in fetching data from database");
      return;
    }
    let user = userDetails[0];

    bcrypt.compare(req.body.password, user.password, function (err, response) {
      if (err) {
        // handle error
        console.log(err, "Error in fetching data from database")
      }
      if (response) {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        console.log("token hai", Date(Date.now() + 800000));
       
        res
          .json({
            token: token,
            expiresIn: 3600,
            _id: user._id,
            status: 200,
            username: user.username,
          });
      } else {
        console.log("dev");
        // response is OutgoingMessage object that server response http request
        return res.json({ status: 404, message: "passwords do not match" });
      }
    });
  });
};
