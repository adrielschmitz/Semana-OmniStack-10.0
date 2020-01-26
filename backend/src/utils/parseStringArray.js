module.exports = parseStringArray = (array) =>
  array.split(',').map(tech => tech.trim());
