const register = require("./register");

test("it works in OPEN case", () => {
  expect(
    register(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ])
  ).toEqual({ changeArr: [["QUARTER", "$0.50"]], status: "OPEN" });
});

test("it works in INSUFFICIENT case, not enough change", () => {
  expect(
    register(19.5, 20, [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ])
  ).toEqual({ changeArr: [], status: "INSUFFICIENT_FUNDS" });
});

test("it works in CLOSED case, exact change", () => {
  expect(
    register(19.5, 20, [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ])
  ).toEqual({ changeArr: [["PENNY", "$0.5"]], status: "CLOSED" });
});
