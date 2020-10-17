const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", (req, res) => {
    User.find()
    .then((data) => {
        return res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err))
});

router.get("/:userid", (req, res) => {
    User.findById(req.params.userid)
    .then((data) => {
        return res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err))
});

router.post("/signup", (req, res) => {
    const user = new User({
        role: req.body.role,
        email: req.body.email,
        password: req.body.password,
        name: "",
      });
    
      user
        .save()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    
});

router.delete("/delete/:userid", (req, res) => {
    User.remove({ _id: req.params.userid })
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  

module.exports = router;