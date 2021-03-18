const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let y = 1 
    let x = 0
           arr.forEach(el => {
          if (Array.isArray(el)) {y = this.calculateDepth(el)
          if (x < y) {x = y}
          }
      })
      return x += 1
  }
}