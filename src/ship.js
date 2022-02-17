function shipFactory (initial_pos, len) {
    const final_pos = calculateFinalPos(initial_pos, len)

    const allPositions = calculateAllPos(initial_pos, final_pos, len)

    const hitPositions = []
    
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

    return { len, initial_pos, final_pos, hitPositions, allPositions, hit, isSunk }
}

function calculateFinalPos(initial_pos, len) {
    const dirOptions = ['vertical', 'horizontal']
    const direction = dirOptions[Math.floor(Math.random() * dirOptions.length)]
    const start = initial_pos.split('')
    let end
    if (direction === 'horizontal') {
        end = start[0].charCodeAt(0) + len - 1
        return String.fromCharCode(end) + start[1]
    } else if (direction === 'vertical') {
        end = parseInt(start[1]) + len - 1
        return start[0] + end
    }    
}


// function calculateLength(initial_pos, final_pos) {
//     const start = initial_pos.split('')
//     const end = final_pos.split('')
//     return (end[0].charCodeAt(0) - start[0].charCodeAt(0)) + (end[1] - start[1]) + 1
// }

function calculateAllPos(initial_pos, final_pos, len) {
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