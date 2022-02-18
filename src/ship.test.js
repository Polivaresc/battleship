const shipModule = require('./ship')
const ship = shipModule.shipFactory

test('create new ship from first position and len', () => {
    const newShip = ship(3, 'A1', 'vertical')
    expect(newShip.len).toBe(3)
    expect(newShip.initial_pos).toBe('A1')
    expect(newShip.final_pos === 'A3').toBe(true)
})

test('hit a ship and assert position hit', () => {
    const newShip = ship(4, 'B2', 'vertical')
    newShip.hit('B3')
    expect(newShip.hitPositions).toContain('B3')
})

test('miss a hit and assert no position hit', () => {
    const newShip = ship(1, 'A2')
    newShip.hit('F4')
    expect(newShip.hitPositions).not.toContain('F4')
})

test('cannot re-hit position', () => {
    const newShip = ship(3, 'A2', 'horizontal')
    newShip.hit('B2')
    expect(newShip.hitPositions).toContain('B2')
    expect(() => newShip.hit('B2')).toThrow('This position is already hit')
})

test('hit all positions of ship and assert isSunk is true', () => {
    const newShip = ship(3, 'A1', 'vertical')
    newShip.hit('A3')
    newShip.hit('A1')
    newShip.hit('A2')
    expect(newShip.isSunk()).toBe(true)    
})

test('hit some positions of ship and assert isSunk is false', () => {
    const newShip = ship(3, 'A1', 'vertical')
    newShip.hit('A1')
    expect(newShip.isSunk()).toBe(false)
})

test('if no given initial position, creates a random one', () => {
    const newShip = ship(2)
    expect(newShip.initial_pos).not.toBeNull()
})

test('restricts some positions depending on the length (1st validation)', () => {
    const newShip = ship(2)
    const splitInitialPos = newShip.splitPos(newShip.initial_pos)
    expect(splitInitialPos[0]).not.toBe('J')
    expect(splitInitialPos[1]).not.toBe('10')
})

test('restricts some positions depending on the length (1st validation)', () => {
    const newShip = ship(4)
    const splitInitialPos = newShip.splitPos(newShip.initial_pos)
    const restrictedLetters = ['H', 'I', 'J']
    const restrictedNums = ['8', '9', '10']
    expect(restrictedLetters).not.toContain(splitInitialPos[0])
    expect(restrictedNums).not.toContain(splitInitialPos[1])
})