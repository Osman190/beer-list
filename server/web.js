const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/beers", (req, res) => {
  let data;
  axios
    .get(`${process.env.URL}/${process.env.ENDPOINT}/?key=${process.env.KEY}`)
    .then(beers => {
      data = beers.data.data;
      res.send({ data });
    })
    .catch(err => {
      console.error(err);
      return err;
    });
});

module.exports = router;
