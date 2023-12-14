const { DataTypes } = require("sequelize");
const seq = require("../Config/database");

const Note = seq.define("note", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Note;
