import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("Missing MONGODB_URI environment variable. Create a `.env` file with MONGODB_URI set (e.g., 'mongodb://localhost:27017').");
        process.exit(1);
    }

    // If the URI already includes the DB name, use it as-is; otherwise append the DB name
    const connectionString = uri.includes(DB_NAME) ? uri : `${uri}/${DB_NAME}`;

    try {
        const connectionInstance = await mongoose.connect(connectionString);
        console.log("MongoDB connected:", connectionInstance.connection.host);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};