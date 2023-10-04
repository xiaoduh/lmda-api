const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      `mongodb+srv://deeladmin:Sfja3tt2xmJBSOJH@deel.hwdezj6.mongodb.net/lambda`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connected to lambda DB");
  } catch (error) {
    console.log("Failed to connect to lambda DB");
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
