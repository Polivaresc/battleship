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

    function addShip(ship) {
        let splitPosition

        if (validateShipPositions(ship)) {
            for (p of ship.allPositions) {
                splitPosition = p.split('')
                const shipLetter = splitPosition[0]
                const shipNumber = splitPosition[1]
                matrix[shipLetter][shipNumber] = 'ship'
            }
        
            allShips.push(ship)
            return true
        }
        return false
    }
    
    function receiveAttack(pos, ship) {
        const coord = pos.split('')
    
        if (ship.allPositions.includes(pos)) {
            ship.hit(pos)
            matrix[coord[0]][coord[1]] = 'ship-hit'
        } else {
            matrix[coord[0]][coord[1]] = 'missed'
        }
    }
    
    function allSunk() {
        const sunkShips = []
        for (s of allShips) {
            if (s.hitPositions.length === s.allPositions.length) {
                sunkShips.push('sunk-ship')
            }
        }
        return sunkShips.length === allShips.length
    }

    function validateShipPositions(ship) {
        for(p of ship.allPositions) {
            const splitPos = p.split('')
            if(matrix[splitPos[0]][splitPos[1]] !== 'empty') {
                return false
            }
        }
        return true
    }

    return { size, sides, matrix, allShips, initial_pos, addShip, receiveAttack, allSunk }
}

module.exports = {
    gameboardFactory
}