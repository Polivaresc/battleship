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
    newGameboard.addShip(newShip)
    expect(newGameboard.matrix['A']['1']).toBe('ship')
    expect(newGameboard.matrix['F']['7']).toBe('empty')
})

test('receiveAttack determines if hit ship or not', () => {
    const newGameboard = gameboard()
    const newShip = ship('A1', 4)
    newGameboard.addShip(newShip)
    newGameboard.receiveAttack('B2', newShip)
    expect(newShip.hitPositions.includes('A2')).toBe(false)
})

test('receiveAttack hits ship & updates matrix', () => {
    const newGameboard = gameboard()
    const newShip = ship('A1', 4, 'vertical')
    newGameboard.addShip(newShip)
    newGameboard.receiveAttack('A2', newShip)
    expect(newShip.hitPositions.includes('A2')).toBe(true)
    expect(newGameboard.matrix['A']['2']).toBe('ship-hit')
})

test('receiveAttack misses hit & updates matrix', () => {
    const newGameboard = gameboard()
    const newShip = ship('A1', 4, 'horizontal')
    newGameboard.addShip(newShip)
    newGameboard.receiveAttack('A2', newShip)
    expect(newGameboard.matrix['A']['2']).toBe('missed')
})

test('reports if all the ships are sunk', () => {
    const newGameboard = gameboard()
    const newShip1 = ship('B4', 1)
    const newShip2 = ship('C3', 1)

    newGameboard.addShip(newShip1)
    newGameboard.addShip(newShip2)

    newGameboard.receiveAttack('B4', newShip1)
    expect(newGameboard.allSunk()).toBe(false)

    newGameboard.receiveAttack('C3', newShip2)
    expect(newGameboard.allSunk()).toBe(true)
})

test('reports if longer ships are sunk', () => {
    const newGameboard = gameboard()
    const newShip = ship('A3', 2, 'vertical')

    newGameboard.addShip(newShip)

    newGameboard.receiveAttack('A3', newShip)
    expect(newGameboard.allSunk()).toBe(false)

    newGameboard.receiveAttack('A4', newShip)
    expect(newGameboard.allSunk()).toBe(true)
})

test('creates random ship initial position', () => {
    const newGameboard = gameboard()
    const newShip = ship('B2', 3, 'horizontal')
    expect(newGameboard.addShip(newShip)).toBe(true)
    
    const newShip2 = ship('C1', 3, 'vertical')
    expect(newGameboard.addShip(newShip2)).toBe(false)
})