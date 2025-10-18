const convertToCelsius = function(F) {
  const C = ((F - 32) / 1.8) + 0.05
  return Math.floor(C * 10) / 10
};

const convertToFahrenheit = function(C) {
  const F = ((C * 1.8) + 32) + 0.05
  return Math.floor(F * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
