const shipModule = require('./ship')
const ship = shipModule.shipFactory

test('create new ship from first position and len', () => {
    const newShip = ship('A1', 3, 'vertical')
    expect(newShip.len).toBe(3)
    expect(newShip.initial_pos).toBe('A1')
    expect(newShip.final_pos === 'A3').toBe(true)
})

test('hit a ship and assert position hit', () => {
    const newShip = ship('B2', 4, 'vertical')
    newShip.hit('B3')
    expect(newShip.hitPositions).toContain('B3')
})

test('miss a hit and assert no position hit', () => {
    const newShip = ship('A2', 1)
    newShip.hit('F4')
    expect(newShip.hitPositions).not.toContain('F4')
})

test('cannot re-hit position', () => {
    const newShip = ship('A2', 3, 'horizontal')
    newShip.hit('B2')
    expect(newShip.hitPositions).toContain('B2')
    expect(() => newShip.hit('B2')).toThrow('This position is already hit')
})

test('hit all positions of ship and assert isSunk is true', () => {
    const newShip = ship('A1', 3, 'vertical')
    newShip.hit('A3')
    newShip.hit('A1')
    newShip.hit('A2')
    expect(newShip.isSunk()).toBe(true)    
})

test('hit some positions of ship and assert isSunk is false', () => {
    const newShip = ship('A1', 3, 'vertical')
    newShip.hit('A1')
    expect(newShip.isSunk()).toBe(false)
})