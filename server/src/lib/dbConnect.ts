import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        // Connect to the database
        await mongoose.connect(process.env.MONGO_URI!, {
            dbName: "code-helper" 
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error in connecting to the database", error);
    }
}