const gameboardModule = require('./gameboard')

function playerFactory (name, isComputer = false) {
    let current = !isComputer
    const gameboard = gameboardModule.gameboardFactory()
    gameboard.initializeShips()

    function attack(pos, opponent) {
        const hit = opponent.gameboard.receiveAttack(pos)
        current = hit ? current : !current
        opponent.current = !hit
    }

    return { name, isComputer, current, gameboard, attack }
}

module.exports = {
    playerFactory
}

