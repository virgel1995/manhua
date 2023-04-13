import mongoose from "mongoose";
// eslint-disable-next-line no-undef
const procc = process.env

const MONGODB_URI =
  procc.MONGODB_URI || "mongodb://127.0.0.1:27017/virus24";

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
    .then(() => {
      console.log("db connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default dbConnect;
