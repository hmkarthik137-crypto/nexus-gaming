import mongoose from "mongoose";
import dns from "dns";
console.log(process.env.MONGO_URI);
const connectDB = async () => {
  try {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);

    const conn = await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      "✅ MongoDB Connected:",
      conn.connection.host
    );

  } catch (error) {

    console.error(
      "❌ MongoDB Error:",
      error.message
    );

    process.exit(1);
  }
};

export default connectDB;
