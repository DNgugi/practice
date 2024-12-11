const convertToRoman = (num) => {
  const numerals = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];

  for (let numeralArr of numerals) {
    if (numeralArr[1] === num) {
      return numeralArr[0].toString();
    }
  }
  const getLength = (num) => {
    return num.toString().length;
  };

  const inputLength = getLength(num);
  // let numI = 1;
  let numV = 5;
  let numX = 10;
  let numC = 100;
  let numM = 1000;

  let romanI = "I";
  let romanV = "V";
  let romanX = "X";
  let romanL = "L";
  let romanC = "C";
  let romanD = "D";
  let romanM = "M";

  if (inputLength === 1) {
    if (num < numV) {
      if (num <= 3) {
        return romanI.repeat(num);
      } else {
        return romanI + romanV;
      }
    } else if (num - numV === 4) {
      return romanI + romanX;
    } else {
      return romanV + romanI.repeat(num - numV);
    }
  }
  if (inputLength === 2 && num < 50) {
    let remainder = 0;

    if (Math.floor(num / numX) < 4) {
      remainder = num - Math.floor(num / numX) * 10;
      if (remainder) {
        return romanX.repeat(num / numX) + convertToRoman(remainder);
      } else {
        return romanX.repeat(num / numX);
      }
    } else {
      remainder = num - Math.floor(num / numX) * 10;
      if (remainder) {
        return romanX + romanL + convertToRoman(remainder);
      }
    }
  } else if (inputLength === 2 && num > 50) {
    if (num - 50 < 40) {
      let remainder = num - 50;
      return romanL + convertToRoman(remainder);
    } else {
      let remainder = num - 90;
      if (remainder) {
        return romanX + romanC + convertToRoman(remainder);
      }
    }
  }

  if (inputLength === 3 && num < 500) {
    if (Math.floor(num / numC) < 4) {
      let remainder = num - Math.floor(num / numC) * 100;
      if (remainder) {
        return romanC.repeat(num / numC) + convertToRoman(remainder);
      } else {
        return romanC.repeat(num / numC);
      }
    } else {
      let remainder = num - Math.floor(num / numC) * 100;
      if (remainder) {
        return romanC + romanD + convertToRoman(remainder);
      }
    }
  } else if (inputLength === 3 && num > 500) {
    if (num - 500 < 400) {
      let remainder = num - 500;
      return romanD + convertToRoman(remainder);
    } else {
      let remainder = num - 900;
      if (remainder) {
        return romanC + romanM + convertToRoman(remainder);
      }
    }
  }

  if (inputLength === 4 && num < 5000) {
    if (Math.floor(num / numM) < 4) {
      let remainder = num - Math.floor(num / numM) * 1000;
      if (remainder) {
        return romanM.repeat(num / numM) + convertToRoman(remainder);
      } else {
        return romanM.repeat(num / numM);
      }
    } else {
      let remainder = num - Math.floor(num / numM) * 1000;
      if (remainder) {
        return romanM + romanD + convertToRoman(remainder);
      }
    }
  }
};

const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
  if (input.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (input.value < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (input.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = convertToRoman(parseInt(input.value));
  }
});
