const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://kimyat:kimyat0899961191%4014421@cluster0.o86ny.mongodb.net/test?retryWrites=true&w=majority&appName=test",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Mongoose Connected");
    });
};

module.exports = connectDatabase;
