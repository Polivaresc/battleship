function gameboardFactory (rows, cols) {
    const colsNum = cols.charCodeAt(0) - 65 + 1 // Convert uppercase letter to number
    const size = rows*colsNum

    let matrix = {}
    for (let i = 0; i < colsNum; i++) {
        const letter = String.fromCharCode(65 + i)
        matrix[letter] = {}

        for (let j = 1; j <= rows; j++) {
            matrix[letter][j] = 'empty'
        }
    }

    const allShips = []

    // TODO - randomize ship generation
    //
    // allShips.addShip(newShip)
    // function randomizeAllShips() {
    
    // }    

    return { size, rows, colsNum, matrix, allShips }
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