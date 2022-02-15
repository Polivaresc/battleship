const gameboardModule = require('./gameboard')
const gameboard = gameboardModule.gameboardFactory
const shipModule = require('./ship')
const ship = shipModule.shipFactory

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

test('places ships at specific coordinates', () => {
    const newGameboard = gameboard(10, 'J')
    const newShip = ship('A1', 'A5')
    gameboardModule.addShip(newShip, newGameboard)
    expect(newGameboard.matrix['A']['1']).toBe('ship')
    expect(newGameboard.matrix['F']['7']).toBe('empty')
})

test('receiveAttack determines if hit ship or not', () => {
    const newGameboard = gameboard(10, 'J')
    const newShip = ship('A1', 'A5')
    gameboardModule.addShip(newShip, newGameboard)
    gameboardModule.receiveAttack('B2', newShip, newGameboard)
    expect(newShip.hitPositions.includes('A2')).toBe(false)
})

test('receiveAttack determines if hit ship or not & updates matrix', () => {
    const newGameboard = gameboard(10, 'J')
    const newShip = ship('A1', 'A5')
    gameboardModule.addShip(newShip, newGameboard)
    gameboardModule.receiveAttack('A2', newShip, newGameboard)
    expect(newShip.hitPositions.includes('A2')).toBe(true)
    expect(newGameboard.matrix['A']['2']).toBe('ship-hit')
})

test('receiveAttack determines if attack missed (hit gameboard)', () => {
    const newGameboard = gameboard(10, 'J')
    const newShip = ship('A1', 'A5')
    gameboardModule.addShip(newShip, newGameboard)
    gameboardModule.receiveAttack('B2', newShip, newGameboard)
    expect(newGameboard.matrix['B']['2']).toBe('missed')
})

test('reports if all the ships are sunk', () => {
    const newGameboard = gameboard(10, 'J')
    const newShip = ship('B4', 'B4')
    gameboardModule.addShip(newShip, newGameboard)
    gameboardModule.receiveAttack('B4', newShip, newGameboard)
    expect(gameboardModule.allSunk(newGameboard)).toBe(true)
})

test('reports if all the ships are sunk', () => {
    const newGameboard = gameboard(10, 'J')
    const newShip1 = ship('B4', 'B4')
    const newShip2 = ship('A3', 'A3')

    gameboardModule.addShip(newShip1, newGameboard)
    gameboardModule.addShip(newShip2, newGameboard)

    gameboardModule.receiveAttack('B4', newShip1, newGameboard)
    expect(gameboardModule.allSunk(newGameboard)).toBe(false)

    gameboardModule.receiveAttack('A3', newShip2, newGameboard)
    expect(gameboardModule.allSunk(newGameboard)).toBe(true)
})

test('reports if longer ships are sunk', () => {
    const newGameboard = gameboard(10, 'J')
    const newShip1 = ship('B4', 'B4')
    const newShip2 = ship('A3', 'A4')

    gameboardModule.addShip(newShip1, newGameboard)
    gameboardModule.addShip(newShip2, newGameboard)

    gameboardModule.receiveAttack('B4', newShip1, newGameboard)
    expect(gameboardModule.allSunk(newGameboard)).toBe(false)

    gameboardModule.receiveAttack('A3', newShip2, newGameboard)
    expect(gameboardModule.allSunk(newGameboard)).toBe(false)

    gameboardModule.receiveAttack('A4', newShip2, newGameboard)
    expect(gameboardModule.allSunk(newGameboard)).toBe(true)
})