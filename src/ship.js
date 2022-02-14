function shipFactory (initial_pos, final_pos) {
    const hitPositions = []
    const len = calculateLength(initial_pos, final_pos)
    const allPositions = getAllPositions(initial_pos, final_pos, len)

    function hit(pos) {
        if (hitPositions.includes(pos)) {
            throw Error('This position is already hit')
        }
        allPositions.includes(pos) ? hitPositions.push(pos) : null
    }

    function isSunk() {
        const notHitPositions = allPositions.filter(p => !hitPositions.includes(p))
        return notHitPositions.length === 0
    }

    return { len, hitPositions, isSunk, hit }
}





function calculateLength(initial_pos, final_pos) {
    const start = initial_pos.split('')
    const end = final_pos.split('')
    return (end[0].charCodeAt(0) - start[0].charCodeAt(0)) + (end[1] - start[1]) + 1
}

function getAllPositions(initial_pos, final_pos, len) {
    const start = initial_pos.split('')
    const end = final_pos.split('')

    const direction = end[1] - start[1] > 0 ? 'vertical' : 'horizontal'
    const allPositions = []

    allPositions.push(initial_pos)
    let current_pos = initial_pos
    for(let i = 1; i < len; i++) {
        let split_current = current_pos.split('')
        current_pos = direction === 'vertical' 
            ? split_current[0] + (parseInt(split_current[1]) + 1)                           // Add 1 to right coord A1 -> A2
            : String.fromCharCode(split_current[0].charCodeAt(0) + 1) + split_current[1]    // Add 1 to left coord A1 -> B1

        allPositions.push(current_pos)
    }

    return allPositions
}

module.exports = {
    shipFactory
}