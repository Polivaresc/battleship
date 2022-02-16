const gameboardModule = require('./gameboard')

function playerFactory (name, isComputer = false) {
    const gameboard = gameboardModule.gameboardFactory(10, 'J')
    const current = !isComputer

    // gameboard.randomizeAllShips()

    

    return { name, isComputer, current, gameboard }
}

module.exports = {
    playerFactory
}