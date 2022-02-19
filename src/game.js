const playerModule = require('./player')
const player = playerModule.playerFactory

function game () {
    const player1 = player('Player')
    const player2 = player('Computer', true)
    const players = [player1, player2]

    players.forEach(p => displayGameboard(p))
    players.forEach(p => styleCells(p))

    return { players }
}

function displayGameboard(player) {
    player.isComputer ? player = 'computer' : player = 'player'

    const gameboard = document.querySelector('#' + player + '-gameboard')
    let colIndex = 0
    let rowIndex = 1

    for(let i = 0; i < 100; i++) {
        const cell = document.createElement('div')
        const cellId = String.fromCharCode(65 + colIndex) + rowIndex
        cell.setAttribute('id', player + '-' + cellId)
        cell.setAttribute('class', 'cell')
        if(player === 'computer') {
            cell.classList.add('computer-cell')
        }
        gameboard.appendChild(cell)

        rowIndex++
        if(rowIndex > 10) {
            colIndex++
            rowIndex = 1
        }
    }
}

function styleCells(player) {
    let playerType
    player.isComputer ? playerType = 'computer' : playerType = 'player'

    const playerMatrix = player.gameboard.matrix
    let letters = Object.keys(playerMatrix)

    for(let letter of letters) {
        const nums = Object.keys(playerMatrix[letter])
        for(let num of nums) {
            const coord = letter + num
            const c = document.querySelector('#' + playerType + '-' + coord)

            switch(playerMatrix[letter][num]) {
                case 'ship':
                    if(!player.isComputer) {
                        c.classList.add('ship-cell')
                    }
                    break;
                case 'missed':
                    c.classList.add('missed-cell')
                    break;
                case 'ship-hit':
                    if(!player.isComputer) {
                        c.classList.replace('ship-cell', 'hit-cell')
                    } else {
                        c.classList.add('hit-cell')
                    }
                    break;
            }
        }
    }
}

module.exports = {
    game
}