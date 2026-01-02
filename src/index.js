import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

// Load environment variables from a .env file at the project root
dotenv.config();

connectDB();