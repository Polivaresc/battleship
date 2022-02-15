const gameboardModule = require('./gameboard')
const gameboard = gameboardModule.gameboardFactory


test('creates a 10x10 gameboard from a number(rows) and a letter(cols)', () => {
    const newGameboard = gameboard(10, 'J')
    expect(newGameboard.size).toBe(100)
})

test('creates a 8x10 gameboard with 8 rows and 10 cols', () => {
    const newGameboard = gameboard(8, 'J')
    expect(newGameboard.rows).toBe(8)
    expect(newGameboard.colsNum).toBe(10)
})

test('creates a 10x8 gameboard with 10 rows and 8 cols', () => {
    const newGameboard = gameboard(10, 'H')
    expect(newGameboard.rows).toBe(10)
    expect(newGameboard.colsNum).toBe(8)
})