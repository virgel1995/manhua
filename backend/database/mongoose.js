import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/virus24";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const dbConnect = async () => {
  const opts = {
    bufferCommands: false,
    autoCreate: false,
  };
  await mongoose
    .connect(MONGODB_URI, opts)
    .then((mongoose) => {
      console.log("db connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default dbConnect;
