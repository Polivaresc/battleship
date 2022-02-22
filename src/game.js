const playerModule = require('./player')
const createPlayer = playerModule.playerFactory

function game () {
    
    const user = createPlayer('Player')
    const computer = createPlayer('Computer', true)
    const players = [user, computer]

    players.forEach(p => displayGameboard(p))
    players.forEach(p => styleCells(p))

    let currentPlayer = user

    const computerGb = document.querySelector('#computer-gameboard')
    const computerCells = [...computerGb.childNodes]
    const userGb = document.querySelector('#player-gameboard')

    computerCells.forEach(c => c.addEventListener('click', (e) => {
        if(currentPlayer === user) {
            userTurn(e)
        }
    }))
    
    function userTurn(e) {
        const cellId = e.target.getAttribute('id')
        const splitId = cellId.split('-')
        const pos = splitId[1]
        try {
            const hit = user.attack(computer, pos)
            styleCells(computer)
            if(!hit) {
                setCurrentPlayer(computer)
                computerTurn()
            } else {
                if (computer.gameboard.allSunk()) {
                    endGame(user)
                }
            }
        } catch (error) {
            alert(error)
        }
        return
    }

    function computerTurn() {
        sleep(750).then(() => {
            try {
                const hit = computer.attack(user)
                styleCells(user)
                if (hit) {
                    if(user.gameboard.allSunk()) {
                        endGame(computer)
                    }
                    return computerTurn()
                } else {
                    setCurrentPlayer(user)
                }
            } catch (error) {
                return computerTurn()
            }
        })
        return    
    }

    function setCurrentPlayer(player) {
        currentPlayer = player
        currentGameboard(currentPlayer, players)
    }

    function currentGameboard(currentPlayer, players) {
        const opponent = players.find(p => p !== currentPlayer)
        if(opponent.isComputer) {
            computerGb.classList.remove('current-gb')
            userGb.classList.add('current-gb')
        } else {
            userGb.classList.remove('current-gb')
            computerGb.classList.add('current-gb')
        }
    }

}

function sleep(ms) {
    return new Promise((resolve) => {
        global.setTimeout(() => resolve(), ms);
    });
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
                    c.textContent = '✗'
                    break;
                case 'ship-hit':
                    if(!player.isComputer) {
                        c.classList.replace('ship-cell', 'hit-cell')
                    } else {
                        c.classList.add('hit-cell')
                    }
                    c.textContent = '✗'
                    break;
            }
        }
    }
}

function endGame(winner) {
    const modal = document.querySelector('.modal')
    modal.style.display = 'flex'

    const message = document.querySelector('#end-message')

    const newGameButton = document.querySelector('#ok-button')
    newGameButton.addEventListener('click', () => {
        modal.style.display = 'none'
        location.reload()
    })

    if(!winner.isComputer) {
        message.textContent = 'You Win!'
    } else {
        message.textContent = 'Game Over!'
    }
}

module.exports = {
    game
}