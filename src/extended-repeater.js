const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "",
    separator = options.separator !== undefined ? options.separator : "+",
    repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1,
    additionRepeatTimes = options.additionRepeatTimes != undefined ? options.additionRepeatTimes : 1,
    additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : "|",
    addition = options.addition !== undefined ? String(options.addition) : "";
  str = String(str);

  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    for (let k = 0; k < additionRepeatTimes; k++) {
      result += addition;

      if (k < additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};
