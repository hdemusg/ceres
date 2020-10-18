const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

router.get("/", (req, res) => {
  Transaction.find({messenger: ""})
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err))
});

router.get("/:transid", (req, res) => {
  Transaction.findById(req.params.transid)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err))
});

router.post("/purchase", (req, res) => {
  const trans = new Transaction({
    item: req.body.item,
    cost: req.body.cost,
    delivered: false,
    messenger: "",
    card: "",
    buyer: req.body.buyer,
  });

  trans
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });

});

//messenger pickup
router.put("/messenger/pickup", (req, res) => {
  Transaction.findOneAndUpdate({_id: req.params.transid}, {messenger: req.messengerName})
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      res.status(500).json(err)
    })
});


//add card
//complete/delivered
//fix Is this Right?
router.put("/messenger/complete", (req, res) =>{
  Transaction.findOneAndUpdate({_id: req.params.transid}, {delivered: true})
  .then((data) => res.status(200).json(data))
  .catch((err) => {
    res.status(500).json(err)
  })
});
//purchase

router.delete("/complete/:transid", (req, res) => {
  Transaction.remove({ _id: req.params.transid })
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/addcard/:transid", (req, res) => {
    FoodItem.findOneAndUpdate({ _id: req.params.transid }, {card: req.body.card})
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  /*
router.put("/addfood/:transid", (req, res) => {
    FoodItem.findOneAndUpdate({ _id: req.params.transid }, {claimed: false})
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  */

module.exports = router;