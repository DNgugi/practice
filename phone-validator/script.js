const valid = (phone) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(phone) ? true : false;
};

const validateBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");

validateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (userInput.value === "") {
    alert("Please provide a phone number");
  }
  if (valid(userInput.value)) {
    resultsDiv.textContent = `Valid US number: ${userInput.value}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${userInput.value}`;
  }
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  resultsDiv.textContent = "";
});
