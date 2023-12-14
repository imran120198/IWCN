const express = require("express");
const {
  addNote,
  getNote,
  deleteNote,
} = require("../Controller/Notes.controller");

const router = express.Router();

router.post("/create", addNote);
router.get("/get", getNote);
router.delete("/delete/:id", deleteNote);

module.exports = router ;
