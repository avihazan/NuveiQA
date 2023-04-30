const data = require("../data/transactions.json");

const getAll = () => {
  return [...data];
};

module.exports = {
  getAll,
};
