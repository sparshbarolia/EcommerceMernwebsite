import express from "express";
//terminal me color add krne ke liye
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from "./routes/productRoutes.js"
import cors from "cors";
import path from 'path';

//configure env
dotenv.config();

//Database config
connectDB();

const app = express();

//MiddleWares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))

//routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);

// app.get("/" , (req,res) => {
//     res.send( "<h1>Welcome to my major project</h1>")
// })
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

//ya to env file se port utha lao vrna agr usme koi error aye to 8080 h default
const port = process.env.port  || 8080;
app.listen(port , () => [
    console.log(`server is working at http://localhost:${port}`.bgCyan.white)
]);