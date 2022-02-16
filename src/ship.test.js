const shipModule = require('./ship')
const ship = shipModule.shipFactory

test('create new ship from first position and len', () => {
    const newShip = ship('A1', 1, 'vertical')
    expect(newShip.len).toBe(1)
    expect(newShip.initial_pos).toBe('A1')
    expect(newShip.final_pos).toBe('A1')
})

// test('can create new ship of len 1', () => {
//     const newShip = ship('A1', 'A1')
//     expect(newShip.len).toBe(1)
// })

// test('can create new ship of len 2', () => {
//     const newShip = ship('A1', 'B1')
//     expect(newShip.len).toBe(2)
// })

// test('hit a ship and assert position hit', () => {
//     const newShip = ship('B2', 'B5')
//     newShip.hit('B3')
//     expect(newShip.hitPositions).toContain('B3')
// })

// test('miss a hit and assert no position hit', () => {
//     const newShip = ship('A2', 'A2')
//     newShip.hit('F4')
//     expect(newShip.hitPositions).not.toContain('F4')
// })

// test('cannot re-hit position', () => {
//     const newShip = ship('A2', 'C2')
//     newShip.hit('B2')
//     expect(newShip.hitPositions).toContain('B2')
//     expect(() => newShip.hit('B2')).toThrow('This position is already hit')
// })

// test('hit all positions of ship and assert isSunk is true', () => {
//     const newShip = ship('A1', 'A3')
//     newShip.hit('A3')
//     newShip.hit('A1')
//     newShip.hit('A2')
//     expect(newShip.isSunk()).toBe(true)
// })

// test('hit some positions of ship and assert isSunk is false', () => {
//     const newShip = ship('A1', 'A3')
//     newShip.hit('A1')
//     expect(newShip.isSunk()).toBe(false)
// })