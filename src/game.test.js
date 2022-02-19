const gameModule = require('./game')
const game = gameModule.game

test('starts game by creating 2 players and their gameboards', () => {
    const newGame = game()
    expect(newGame.players.length).toBe(2)
    expect(newGame.players[0].gameboard).toBeDefined()
})