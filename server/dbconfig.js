import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const DB_CONFIG = async (req, res) => {
    try {
        
        const connection = mongoose.connect(process.env.DB_URL);

        if(!connection){
            return res.status(404).json({message:"Error in connection string"});
        } else {
            return connection;
        }

    } catch (error) {
        console.log('There is error while connecting DB ', error);
        return res.status(500);
    }
}

export default DB_CONFIG;