const express = require("express");
const FoodItem = require("../models/FoodItem");
const router = express.Router();

router.get("/", (req, res) => {
  FoodItem.find()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err))
});

router.get("/:foodid", (req, res) => {
  FoodItem.findById(req.params.foodid)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err))
});

router.post("/produce", (req, res) => {
  const food = new FoodItem({
    title: req.body.title,
    price: req.body.price,
    vendor: req.body.vendor,
    qty: req.body.qty,
    claimed: false,
  });

  food
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });

});

router.delete("/delete/:foodid", (req, res) => {
  FoodItem.remove({ _id: req.params.foodid })
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/claim/:foodid", (req, res) => {
    FoodItem.findOneAndUpdate({ _id: req.params.foodid }, {claimed: true})
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        res.status(500).json(err);
      });
  });

router.put("/unclaim/:foodid", (req, res) => {
    FoodItem.findOneAndUpdate({ _id: req.params.foodid }, {claimed: false})
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        res.status(500).json(err);
      });
  });

module.exports = router;