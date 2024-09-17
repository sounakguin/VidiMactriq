//
import mongoose from "mongoose";
const connection = {};

export default async function dbConnect() {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    const db = await mongoose.connect(
      "mongodb+srv://sounakguin:NfBGj7pAlh1SRW0h@cluster0.v4kyi.mongodb.net/",
      { dbName: "vidi" }
    );
    connection.isConnected = db.connections[0].readyState;

    console.log("DB Connected");
  } catch (e) {
    console.log("Failed");
  }
}
