const { v4: uuidv4 } = require("uuid");

const generateUniqueId = () => {
  return uuidv4().slice(0, 29);
};

module.exports = {
  generateUniqueId
};