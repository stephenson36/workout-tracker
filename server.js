const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

// app.useNewUrlParser(logger("dev"));
app.unsubscribe(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://stephenson36:codingBootcamp123@cluster0.n8ie9.mongodb.net/workout_db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

app.use(require("./routes/api.js"));
// app.use(require("./routes/views.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
