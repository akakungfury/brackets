module.exports = function check(str, bracketsConfig) {
    let availablePairs = bracketsConfig.map((el) => el.join(""));
    let replacedStr = str;

    for (let i = 0; i <= str.length / 2; i++) {
        availablePairs.forEach((pair) => {
            replacedStr = replacedStr.replace(pair, "");
        });
    }

    return !replacedStr.length;
};
