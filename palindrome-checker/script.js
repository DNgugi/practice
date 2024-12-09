const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const isPalindrome = (text) => {
  if (text === "") {
    return false;
  }

  const isLetter = (text) => {
    return text.match(/[a-z]/gi) !== null ? true : false;
  };

  if (text.length === 1 && isLetter(text)) {
    return true;
  }

  const cleanInput = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]/g, "");
  };

  text = cleanInput(text);
  let startPointer = 0;
  let endPointer = text.length - 1;
  let result;

  while (startPointer < endPointer) {
    if (text[startPointer] !== text[endPointer]) {
      return false;
    } else {
      result = true;
    }
    startPointer++;
    endPointer--;
  }
  return result;
};

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let text = textInput.value;
  if (text === "") {
    alert("Please input a value");
  } else if (isPalindrome(text)) {
    result.innerText = `${text} is a palindrome`;
  } else {
    result.innerText = `${text} is not a palindrome`;
  }
});
