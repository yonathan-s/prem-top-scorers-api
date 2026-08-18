const players = require("./players.json")

class Player{

    constructor(player){
        this.id = player.id
        this.fName = player.firstName;
        this.lName = player.lastName;
        this.team = player.team;
        this.goals = player.goals;
        this.rank = player.rankInTeam;
    }

    static showAll (){
        return players.map(p => new Player(p))
    }



}

module.exports = Player