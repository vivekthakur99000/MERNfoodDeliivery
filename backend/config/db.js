import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://root:root@cluster0.1nx7e.mongodb.net/food-del').then(() => console.log("Db connected")
    )
}