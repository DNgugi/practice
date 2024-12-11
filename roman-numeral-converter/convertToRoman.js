const convertToRoman = num => {
    if (num === "") {
        return "invalid"
    }
    let numLength = num.length;
    // console.log(numLength)
    num = parseInt(num)
    if (num < 0) {
        return "negative"
    }
    if (num >= 4000) {
        return "too big"
    }

    const numerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    let iterableNumerals = Object.entries(numerals)
    for (let numeralArr of iterableNumerals) {
        if (numeralArr[1] === num) {
            return numeralArr[0].toString();
        }
    }
    if (numLength === 1) {
        if (num > 5) {
            if (num - 5 === 4) {
                return "IX"
            } else {
                return 'V' + 'I'.repeat(num - 5);
            }
        } else {
            if (num === 4) {
                return "IV"
            } else {
                return "I".repeat(num);
            }
        }
    }

    

    // console.log(num);
    
}
convertToRoman('5');

module.exports = convertToRoman;