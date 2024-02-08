const addDays = require("date-fns/addDays");

const getDayAfterxDays = (x) => {
  const res = addDays(new Date(2020, 7, 22), x);

  return `${res.getDate()}-${res.getMonth() + 1}-${res.getFullYear()}`;
};

module.exports = getDayAfterxDays;
