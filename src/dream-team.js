const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return (!Array.isArray(members)) ? false : members
  .filter(name => typeof(name) === 'string')
  .map(name => name .trim()[0].toUpperCase())
  .sort().join('')
}
