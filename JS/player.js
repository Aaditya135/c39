class Player{

    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",(data) => {
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players')
        playerInfoRef.on("value",(data) => {
            allPlayers = data.val()
        })
        
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            index: this.index,
            name: this.name,
            distance: this.distance,
            rank: this.rank
        })
    }

    getFinishedPlayers(){
        var finishedPlayersRef = database.ref('finishedPlayers')
        finishedPlayersRef.on("value",(data) => {
            finishedPlayers = data.val()
        })
    }

    static updateFinishedPlayers(){
        database.ref('/').update({
            finishedPlayers: finishedPlayers + 1
        })
        this.rank += 1
    }

}