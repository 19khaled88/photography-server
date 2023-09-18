const mongoose = require("mongoose");
require("dotenv").config();

const { DB_NAME, DB_USER_NAME, DB_PASSWORD } = process.env;

mongoose.connect(
  // `mongodb+srv://hasnat_arman:hasnat_arman_112233@cluster0.dk5gi9i.mongodb.net/photography?retryWrites=true&w=majority`,
  `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.dk5gi9i.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Database successfully connected");
});

module.exports = db;
