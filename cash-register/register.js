const register = (price, cashTendered, drawer) => {
  const currencyDictionary = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];
  let changeDue = (cashTendered - price).toFixed(2);
  console.log("Change Due", changeDue);
  let drawerStartIndex;

  for (let i = 0; i < currencyDictionary.length; i++) {
    if (changeDue - currencyDictionary[i][1] > 0) {
      drawerStartIndex = i;
      break;
    }
  }
    drawer = drawer.reverse();
    let changeArr = [];
    console.log(drawer[drawerStartIndex][1]);
    if (drawer[drawerStartIndex][1] - changeDue > 0){
        changeArr.push([drawer[drawerStartIndex][0], changeDue])
    } 
    console.log(changeArr);
    return changeArr;


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
