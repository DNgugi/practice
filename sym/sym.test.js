const sym = require('./sym.js');
    
// sym([1,2,3], [2,3,4]) = [1,4]
test('works with list of 2 arrays', () => {
    expect(sym([1, 2, 3], [2, 3, 4])).toEqual(expect.arrayContaining([1,4]));
})
