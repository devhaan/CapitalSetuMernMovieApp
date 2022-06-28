const User = require("../model/user_credential");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports.signup = (req, res) => {
  console.log("signup",req.body.password)
  bcrypt.hash(req.body.password, 10).then(hash => {
    const pass=hash
    
  User.find({ username: req.body.username }, (err, UserList) => {
    if (err) {
      console.log("notfound");
      return;
    }

    if (UserList.length === 0) {
      User.create(
        {
          username: req.body.username,
          password: pass,
        },
        (err, newUser) => {
          if (err) {
            console.log(err, "Error in storing contact");
            return;
          } else {
            res.status(200).json({
              msg: "created successfully",
            });
          }
        }
      );
    } else {
      res.status(200).json({
        msg: "duplicate uid",
      });
    }
   });
  });
 
}



