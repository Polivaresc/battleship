const playerModule = require('./player')
const player = playerModule.playerFactory

test('factory creates new named player', () => {
    const newPlayer = player('Odin')
    expect(newPlayer.name).toBe('Odin')
})

test('player has its own gameboard', () => {
    const newPlayer = player('Thor')
    expect(newPlayer.gameboard).toBeDefined()
})

