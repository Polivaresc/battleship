const playerModule = require('./player')
const player = playerModule.playerFactory

test('factory creates new named player', () => {
    const newPlayer = player('Odin')
    expect(newPlayer.name).toBe('Odin')
})

test('player initializes gameboard and ships', () => {
    const newPlayer = player('Thor')
    expect(newPlayer.gameboard.allShips.length).toBe(10)
})

test('if player is not computer it is the current player when created', () => {
    const newPlayer = player('Odin')
    expect(newPlayer.current).toBe(true)
})

test('if player is computer it is not the current player', () => {
    const newPlayer = player('Computer', true)
    expect(newPlayer.current).toBe(false)
})

test('player attacks the other players gameboard', () => {
    const newPlayer = player('Odin')
    const computer = player('Computer', true)
    const prevMatrix = Object.assign({}, computer.gameboard.matrix)
    newPlayer.attack('C2', computer)
    const currentMatrix = computer.gameboard.matrix
    expect(currentMatrix !== prevMatrix).toBe(true)
})