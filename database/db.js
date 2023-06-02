import mongoose from "mongoose";

const Connection = async(URL) =>{
    try {
        await mongoose.connect(URL);
        console.log('Database connection successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;

