import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://imeth128_db_user:s4SXqbOLau1DyCO2@cluster0.moigty1.mongodb.net/notes_db?appName=Cluster0");
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error);
        process.exit(1);//exit with failure
    }
};

export default connectDB;