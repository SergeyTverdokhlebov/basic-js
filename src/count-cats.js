const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let number = 0;
  let MyArr = backyard.flat();

  for (let i = 0; i < MyArr.length; i++) {
    if (MyArr[i] === "^^") {
      number++;
    }
  }
  return number;

};