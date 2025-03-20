import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DATA_URL

export const dbConnection = mongoose.connect(url).then( console.log('DB Is Connected Successfully') ).catch( err => console.log(err) );