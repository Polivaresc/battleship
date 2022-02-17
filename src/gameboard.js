const shipModule = require('./ship')
const ship = shipModule.shipFactory

function gameboardFactory () {
    const sides = 10
    const size = sides**2

    let matrix = {}
    for (let i = 0; i < sides; i++) {
        const letter = String.fromCharCode(65 + i) // Convert number of sides to uppercase letters
        matrix[letter] = {}

        for (let j = 1; j <= sides; j++) {
            matrix[letter][j] = 'empty'
        }
    }

    const allShips = []

    // TODO - randomize ship generation
    //
    // allShips.addShip(newShip)
    // function randomizeAllShips() {
    
    // }    
    const pickedPositions = []

    const cols = 'ABCDEFGHIJ'
    const first_coord = cols[Math.floor(Math.random() * cols.length)]
    const second_coord = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    const initial_pos = first_coord + second_coord

    // check if all ship positions exist in matrix
    // after creating ship push all positions to pickedPositions (then check if new generated initial_pos exist in pickedPos)

    pickedPositions.push(initial_pos)

    console.log(initial_pos)

    return { size, sides, matrix, allShips, initial_pos }
}

function addShip(newShip, gameboard) {
    let splitPosition
    for (p of newShip.allPositions) {
        splitPosition = p.split('')
        const shipLetter = splitPosition[0]
        const shipNumber = splitPosition[1]
        gameboard.matrix[shipLetter][shipNumber] = 'ship'
    }

    gameboard.allShips.push(newShip)
}

function receiveAttack(pos, ship, gameboard) {
    const coord = pos.split('')

    if (ship.allPositions.includes(pos)) {
        ship.hit(pos)
        gameboard.matrix[coord[0]][coord[1]] = 'ship-hit'
    } else {
        gameboard.matrix[coord[0]][coord[1]] = 'missed'
    }
}

function allSunk(gameboard) {
    const sunkShips = []
    for (s of gameboard.allShips) {
        if (s.hitPositions.length === s.allPositions.length) {
            sunkShips.push('sunk-ship')
        }
    }
    return sunkShips.length === gameboard.allShips.length
}

module.exports = {
    gameboardFactory,
    addShip,
    receiveAttack,
    allSunk
}