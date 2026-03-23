import mongoose from "mongoose";

//1-create schema
//2-create model based from schema
//3-export model

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    user: String,
});

export default mongoose.model("Note", noteSchema);