const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (!parseFloat(sampleActivity) || typeof sampleActivity !== "string" ||
    sampleActivity > MODERN_ACTIVITY || parseFloat(sampleActivity) < 0) {
    return false;
  } 
  else {
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / K);
  }
};
