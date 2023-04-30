const express = require("express");
const router = express.Router();

const logics = require("../logics/transactions");

const logRequest = require("../middlewares/logRequest");
const logResponse = require("../middlewares/logResponse");

router.get("/", [logRequest], async (req, res, next) => {
  const result = await logics.getAll();
  res.value = result;
  next();
});

router.all("*", [logResponse], (req, res) => {
  if (!res.value) {
    return res.status(500).send("Bad request");
  }

  return res.status(200).send(res.value);
});

module.exports = router;
