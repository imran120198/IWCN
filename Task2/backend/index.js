const express = require("express");
const seq = require("./Config/database");
const notes = require("./Routes/Notes.routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/note", notes);

seq.sync().then(() => {
  app.listen(8000, () => {
    console.log("Server Start listening to 8000");
  });
});
