const convertToRoman = num => {
    if (num === "") {
        return "invalid"
    }
    num = parseInt(num)
    if (num < 0) {
        return "negative"
    }
    if (num >= 4000) {
        return "too big"
    }
}

module.exports = convertToRoman;