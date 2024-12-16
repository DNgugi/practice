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
const calculate = (price, cid, cashTendered) => {
  const result = {
    status: "",
    changeDue: [],
  };
  return result;
};
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

let cash = document.getElementById("cash");

cash.addEventListener("change", () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash.value == price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
  }
});

purchaseBtn.addEventListener("click", () => {
  const { status } = calculate(price, cid, cash.value);
  if (status === "INSUFFICIENT_FUNDS") {
    changeDue.innerText = `Status: ${status}`;
  } else if (status === "CLOSED") {
    changeDue.innerText = `Status: ${status}`;
  } else if (status === "OPEN") {
    changeDue.innerText = `Status: ${status}`;
  }
});
