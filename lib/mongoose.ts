import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  //prevent unknown field queries
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("NO DB URL");
  }

  if (isConnected) {
    return console.log("Mongodb connected");
  }

  try {
  } catch (error) {}
};
