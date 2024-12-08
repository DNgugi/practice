const isUnique = require('./isUnique');

test('should return false with empty strings', () => { 
    expect(isUnique("").toEqual(false));
 })