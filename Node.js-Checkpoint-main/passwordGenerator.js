var generator = require("generate-password");

const passwordGenerator = () => {
  var password = generator.generate({
    length: 10,
    numbers: true,
  });

  // 'uEyMTw32v9'
  console.log("Password: " + password);
};

module.exports = { passwordGenerator };
