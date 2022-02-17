const gameboardModule = require('./gameboard')
const gameboard = gameboardModule.gameboardFactory
const shipModule = require('./ship')
const ship = shipModule.shipFactory

test('creates a 10x10 gameboard', () => {
    const newGameboard = gameboard()
    expect(newGameboard.size).toBe(100)
    expect(newGameboard.sides).toBe(10)
})

test('places ships at specific coordinates', () => {
    const newGameboard = gameboard()
    const newShip = ship('A1', 4)
    gameboardModule.addShip(newShip, newGameboard)
    expect(newGameboard.matrix['A']['1']).toBe('ship')
    expect(newGameboard.matrix['F']['7']).toBe('empty')
})

test('receiveAttack determines if hit ship or not', () => {
    const newGameboard = gameboard()
    const newShip = ship('A1', 4)
    gameboardModule.addShip(newShip, newGameboard)
    gameboardModule.receiveAttack('B2', newShip, newGameboard)
    expect(newShip.hitPositions.includes('A2')).toBe(false)
})

test('receiveAttack determines if hit ship or not & updates matrix', () => {
    const newGameboard = gameboard()
    const newShip = ship('A1', 4)
    gameboardModule.addShip(newShip, newGameboard)
    gameboardModule.receiveAttack('A2', newShip, newGameboard)

    if(newShip.allPositions.includes('A2')) {
        expect(newShip.hitPositions.includes('A2')).toBe(true)
        expect(newGameboard.matrix['A']['2']).toBe('ship-hit')
    } else {
        expect(newGameboard.matrix['A']['2']).toBe('missed')
    }
})

test('reports if all the ships are sunk', () => {
    const newGameboard = gameboard()
    const newShip = ship('B4', 1)
    gameboardModule.addShip(newShip, newGameboard)
    gameboardModule.receiveAttack('B4', newShip, newGameboard)
    expect(gameboardModule.allSunk(newGameboard)).toBe(true)
})

test('reports if longer ships are sunk', () => {
    const newGameboard = gameboard()
    const newShip = ship('A3', 2)

    gameboardModule.addShip(newShip, newGameboard)

    gameboardModule.receiveAttack('A3', newShip, newGameboard)
    expect(gameboardModule.allSunk(newGameboard)).toBe(false)

    if(newShip.allPositions.includes('A4')) {
        gameboardModule.receiveAttack('A4', newShip, newGameboard)
        expect(gameboardModule.allSunk(newGameboard)).toBe(true)
    }
})

test('creates random ship initial position', () => {
    const newGameboard = gameboard()
    expect(newGameboard.initial_pos).toBeDefined()
})