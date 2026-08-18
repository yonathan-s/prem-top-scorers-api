const Player = require("../models/Player");
 
const showAll = async (req, res) => {
    try{
        const players = await Player.showAll()
        res.status(200).send(players)
    } catch(err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = { showAll }