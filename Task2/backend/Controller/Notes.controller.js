const asyncHandler = require("express-async-handler");
const  Note  = require("../Models/Notes.model");

const addNote = asyncHandler(async (req, res) => {
  const { note } = req.body;
  try {
    const result = await Note.create({ message: note });
    res
      .status(201)
      .json({
        success: true,
        message: "note is successfully created",
        data: result,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "sorry note is note created", error: error.message });
  }
});

//get request
const getNote = asyncHandler(async (req, res) => {
  try {
    const response = await Note.findAll();
    res
      .status(200)
      .json({
        success: true,
        message: "note is successfully fetched",
        data: response,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "sorry note is note fetched", error: error.message });
  }
});

//delete request
const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    await Note.destroy({ where: { id: id } });
    res.status(202).json({ message: "successfuly deleted" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "sorry there is a problem while deleting your note",
        error: error.message,
      });
  }
});

module.exports = { addNote, getNote, deleteNote };
