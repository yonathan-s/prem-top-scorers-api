const express = require('express');
const players = require("../controllers/players")
const router = express.Router();

router.get('/', players.showAll)

module.exports = router