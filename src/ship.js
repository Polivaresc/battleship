function shipFactory (len, initial_pos = null, direction = null) {
    if (!direction) {
        const dirOptions = ['vertical', 'horizontal']
        direction = dirOptions[Math.floor(Math.random() * dirOptions.length)]
    }

    if(!initial_pos) {
        let cols
        let maxRow
        switch(len) {
            case 1:
                cols = 'ABCDEFGHIJ'
                maxRow = 10
                break;
            case 2:
                cols = 'ABCDEFGHI'
                maxRow = 9
                break;
            case 3:
                cols = 'ABCDEFGH'
                maxRow = 8
                break;
            case 4:
                cols = 'ABCDEFG'
                maxRow = 7
                break;
        }
        const first_coord = cols[Math.floor(Math.random() * cols.length)]
        const second_coord = Math.floor(Math.random() * (maxRow - 1 + 1) + 1)
        initial_pos = first_coord + second_coord
    }

    const allPositions = calculateAllPos(len, initial_pos, direction)
    const final_pos = allPositions[len - 1]

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

    function calculateAllPos(len, initial_pos, direction) {
        const allPositions = []
    
        allPositions.push(initial_pos)
        let current_pos = initial_pos
        for(let i = 1; i < len; i++) {
            let split_current = splitPos(current_pos)
            current_pos = direction === 'vertical' 
                ? split_current[0] + (parseInt(split_current[1]) + 1)                           // Add 1 to right coord A1 -> A2
                : String.fromCharCode(split_current[0].charCodeAt(0) + 1) + split_current[1]    // Add 1 to left coord A1 -> B1
    
            allPositions.push(current_pos)
        }
    
        return allPositions
    }
    
    function splitPos(position) {
        return position.match(/[a-zA-Z]+|[0-9]+/g)
    }

    return { len, initial_pos, final_pos, hitPositions, allPositions, hit, isSunk, splitPos }
}

module.exports = {
    shipFactory
}