const gameboardModule = require('./gameboard')

function playerFactory (name, isComputer = false) {
    const gameboard = gameboardModule.gameboardFactory()
    gameboard.initializeShips()

    function attack(opponent, pos = null) {
        if (!pos) {
            pos = automaticPos()
        }
        const valid = validateAttack(opponent, pos) 
        if(valid) {
            return opponent.gameboard.receiveAttack(pos)
        } else {
            throw Error('This position is already hit')
        }
    }

    function automaticPos() {
        const cols = 'ABCDEFGHIJ'
        const first_coord = cols[Math.floor(Math.random() * cols.length)]
        const second_coord = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        return first_coord + second_coord
    }

    function validateAttack(opponent, pos) {
        const coord = pos.match(/[a-zA-Z]+|[0-9]+/g)
        const matrixValue = opponent.gameboard.matrix[coord[0]][coord[1]]

        if(matrixValue === 'empty' || matrixValue === 'ship') {
            return true
        } else {
            return false
        }
    }

    return { name, isComputer, gameboard, attack }
}

module.exports = {
    playerFactory
}