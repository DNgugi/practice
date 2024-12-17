//DUMMY DATA
let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

//DOM Elements
let cash = document.getElementById("cash");
const changeDiv = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

//Register Function
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
      drawerStartIndex = i - 1;
      break;
    }
  }
  drawer = drawer.reverse();
  
  let changeArr = [];
  if (changeDue > 0 && drawerStartIndex <= drawer.length) {
    let amt = drawer[drawerStartIndex][1];
    if ((changeDue / amt).toFixed(2) > 1) {
      changeDue -= amt;
      changeArr.push([drawer[drawerStartIndex][0], changeDue]);
      console.log(changeArr);
    } else {
      drawerStartIndex++;
    }
  }

  console.log("change array", changeArr);
};

cash.addEventListener("change", () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash.value == price) {
    changeDiv.innerText = "No change due - customer paid with exact cash";
  }
});

purchaseBtn.addEventListener("click", () => {
  const { status } = register(price, cash.value, cid);
  if (status === "INSUFFICIENT_FUNDS") {
    changeDiv.innerText = `Status: ${status}`;
  } else if (status === "CLOSED") {
    changeDiv.innerText = `Status: ${status}`;
  } else if (status === "OPEN") {
    changeDiv.innerText = `Status: ${status}`;
  }
});
