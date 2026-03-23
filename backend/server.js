import express from "express";
import dotenv from "dotenv";
dotenv.config();

import notesRoutes from "./src/routes/notesRoutes.js";
import connectDB from "./src/config/db.js";

const app = express();
connectDB();
app.use("/api/notes", notesRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});




//