const express = require("express");
const router = express.Router();
const path = require("path");
const axios = require("axios");

router.get("/category", (req, res) => {
  console.log(req.query);
  let resp;
  const fetch = async () => {
    try {
      resp = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${
          req.query.country
        }&apiKey=e2d3e2a0e1f1466995d94400808311d6&page=${
          req.query.page || 1
        }&category=${req.query.cat}`
      );
      res.status(200).json(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetch();
  // return res.status(400).json("not found")
});
router.get("/search", (req, res) => {
  let resp;
  const fetch = async () => {
    try {
      resp = await axios.get(
        `https://newsapi.org/v2/everything?q=${
          req.query.q
        }&apiKey=e2d3e2a0e1f1466995d94400808311d6&page=${req.query.page || 1}`
      );
      res.status(200).json(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetch();
  // return res.status(400).json("not found")
});

module.exports = router;
