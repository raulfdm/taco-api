const { isNaN } = require('lodash');

const isValidId = id => !isNaN(parseInt(id, 10));

module.exports = {
  isValidId,
};
