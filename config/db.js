const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("db Connected ...");
  } catch (err) {
    console.error(err);
    // EXit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
