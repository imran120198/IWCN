const Sequelize = require("sequelize");

const seq = new Sequelize("NOTE_APP", "root", "Imran@1998", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = seq;
