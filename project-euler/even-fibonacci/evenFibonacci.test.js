const fiboEvenSum = require('./evenFibonacci');

describe("Sum of even numbers in fibonacci sequence which are < given number", () => {
  it("works with valid examples", () => {
    expect(fiboEvenSum(10)).toBe(10);
    expect(fiboEvenSum(34)).toBe(44);
    expect(fiboEvenSum(60)).toBe(44);
    expect(fiboEvenSum(1000)).toBe(798);
    expect(fiboEvenSum(100000)).toBe(60696);
    expect(fiboEvenSum(4000000)).toBe(4613732);
  });
});
