const express = require("express");
const router = express.Router();
const ethers = require('ethers')
const provider = new ethers.providers.WebSocketProvider('wss://wss-testnet.5ire.network/')

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
