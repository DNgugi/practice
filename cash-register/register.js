/**
 * SIGNATURE:
 * Float, Float, Array -> Object
 * 
 * PURPOSE:
 * Based on item price, cash in drawer and cash tendered, return a transaction status and change due if any
 * 
 * STUB:
 * const register = (price, cid, cashTendered) => {
    * const result = {
    * status: "",
    * changeDue: [],
    * };
    * return result;
 * };
 * 
 * EXAMPLES:
 * register(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]); -> {status: "OPEN", changeDue = [[QUARTER, "0.5"]]}
 */



const register = (price, cashTendered, cid) => {
  const result = {
    changeDue: [],
    status: "",
  };
  return result;
};




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
]);

module.exports = register;

