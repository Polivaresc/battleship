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
    const newShip = ship(4, 'A1')
    newGameboard.addShip(newShip)
    expect(newGameboard.matrix['A']['1']).toBe('ship')
    expect(newGameboard.matrix['F']['7']).toBe('empty')
})

test('receiveAttack determines if hit ship or not', () => {
    const newGameboard = gameboard()
    const newShip = ship(4, 'A1')
    newGameboard.addShip(newShip)
    newGameboard.receiveAttack('B2')
    expect(newShip.hitPositions.includes('A2')).toBe(false)
})

test('receiveAttack hits ship & updates matrix', () => {
    const newGameboard = gameboard()
    const newShip = ship(4, 'A1', 'vertical')
    newGameboard.addShip(newShip)
    newGameboard.receiveAttack('A2')
    expect(newShip.hitPositions.includes('A2')).toBe(true)
    expect(newGameboard.matrix['A']['2']).toBe('ship-hit')
})

test('receiveAttack misses hit & updates matrix', () => {
    const newGameboard = gameboard()
    const newShip = ship(4, 'A1', 'horizontal')
    newGameboard.addShip(newShip)
    newGameboard.receiveAttack('A2')
    expect(newGameboard.matrix['A']['2']).toBe('missed')
})

test('reports if all the ships are sunk', () => {
    const newGameboard = gameboard()
    const newShip1 = ship(1, 'B4')
    const newShip2 = ship(1, 'C3')

    newGameboard.addShip(newShip1)
    newGameboard.addShip(newShip2)

    newGameboard.receiveAttack('B4')
    expect(newGameboard.allSunk()).toBe(false)

    newGameboard.receiveAttack('C3')
    expect(newGameboard.allSunk()).toBe(true)
})

test('reports if longer ships are sunk', () => {
    const newGameboard = gameboard()
    const newShip = ship(2, 'A3', 'vertical')

    newGameboard.addShip(newShip)

    newGameboard.receiveAttack('A3')
    expect(newGameboard.allSunk()).toBe(false)

    newGameboard.receiveAttack('A4')
    expect(newGameboard.allSunk()).toBe(true)
})

test('validates initial position when adding to gameboard', () => {
    const newGameboard = gameboard()
    const newShip1 = ship(3, 'B2', 'horizontal')
    expect(newGameboard.addShip(newShip1)).toBe(true)
    
    const newShip2 = ship(3, 'C1', 'vertical')
    expect(newGameboard.addShip(newShip2)).toBe(false)
})

test('validates existing letter in matrix', () => {
    const newGameboard = gameboard()
    const newShip = ship(3, 'Z1')
    expect(newGameboard.addShip(newShip)).toBe(false)
})

test('validates existing number in matrix', () => {
    const newGameboard = gameboard()
    const newShip = ship(3, 'A12')
    expect(newGameboard.addShip(newShip)).toBe(false)
})

test('validates existing letter AND number', () => {
    const newGameboard = gameboard()
    const newShip = ship(3, 'Z12')
    expect(newGameboard.addShip(newShip)).toBe(false)
})

test('initialize ships create 10 ships', () => {
    const newGameboard = gameboard()
    newGameboard.initializeShips()
    expect(newGameboard.allShips.length).toBe(10)
})

test('initialize 4 ships(1), 3 ships(2), 2 ships(3) and 1 ship(4)', () => {
    const newGameboard = gameboard()
    newGameboard.initializeShips()
    const allLen = []
    newGameboard.allShips.forEach(s => allLen.push(s.len))
    expect(allLen.filter(a => a === 1).length).toBe(4)
    expect(allLen.filter(a => a === 2).length).toBe(3)
    expect(allLen.filter(a => a === 3).length).toBe(2)
    expect(allLen.filter(a => a === 4).length).toBe(1)
})