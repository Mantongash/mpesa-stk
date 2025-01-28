const express = require("express");

const router = express.Router();

router.post("/stk", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = router;
