const shipModule = require('./ship')
const ship = shipModule.shipFactory

test('ships contain len, hit and sink', () => {
    expect(ship(1)).toEqual({len: 1, hit: null, sink: false})
})

// test('hit() function returns hit position', () => {
//     expect(ship(4)).toEqual({len: 4, hit: 3, sink: false})
// })