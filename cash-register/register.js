const register = (price, cashTendered, drawer) => {
  const currencyDictionary = [
    ["ONE HUNDRED", 100.0],
    ["TWENTY", 20.0],
    ["TEN", 10.0],
    ["FIVE", 5.0],
    ["ONE", 1.0],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];
  let changeDue = (cashTendered - price).toFixed(2);
  drawer = drawer.reverse();
  const changeArr = [];
  const drawerTotal = drawer.reduce((acc, item) => acc + item[1], 0);
  const result = { status: "", changeArr: changeArr };

  const canIssueExactChange = (changeDue, drawer) => {
    for (let i = 0; i < drawer.length; i++) {
      /**
       * check if changeDue can use this slot
       * dividing changeDue with currencyBase tells us if it can be used to issue some of all of changeDue
       * and how many coins/note we can use for this purpose
       * */
      let currencyName = currencyDictionary[i][0]; // e.g 0.25 or 0.05
      let currencyBase = currencyDictionary[i][1]; // e.g 0.25 or 0.05

      let piecesOfCurrency = Math.floor(changeDue / currencyBase);
      let isValidDenomination = piecesOfCurrency > 1;

      if (isValidDenomination) {
        //if the highest possible amount in that base cannot be issued, we take everything we can in that base from the drawer.
        //if the amount in drawer in that base exceeds what we need, only take what we need!
        const change =
          (piecesOfCurrency * currencyBase).toFixed(2) > drawer[i][1]
            ? drawer[i][1]
            : (piecesOfCurrency * currencyBase).toFixed(2);
        changeDue -= change;
        changeArr.push([currencyName, `$${change}`]);
        //canchange
      }
    }
    if (changeDue >= 0) {
      return true;
    } else {
      return false;
    }
  };

  if (drawerTotal == changeDue) {
    result.status = "CLOSED";
    result.changeArr = drawer.filter((i) => i[1] !== 0);
    result.changeArr.forEach((item) => (item[1] = `$${item[1].toString()}`));
    // console.log("Closed case", result.changeArr[0]);
    return result;
  }
  if (drawerTotal < changeDue) {
    result.status = "INSUFFICIENT_FUNDS";
    result.changeArr = [];

    return result;
  }
  if (drawerTotal > changeDue) {
    if (!canIssueExactChange(changeDue, drawer)) {
      result.status = "INSUFFICIENT_FUNDS";
      result.changeArr = [];
      return result;
    } else {
      result.status = "OPEN";
      changeArr.forEach((arr) => arr.toString().split("").join(" "));
      return result;
    }
  }
};

console.log(
  register(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ]).changeArr
);
console.log(
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
);

console.log(
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
);
module.exports = register;
