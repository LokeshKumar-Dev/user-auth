const mongoose = require("mongoose");

const username = "dev3000";
const password = "AJVbCWRYf9kj7OgM";
const cluster = "clusterdb.ok95nts";
const dbname = "guvi";

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

async function connectDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    //verification
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully");
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectDatabase;
