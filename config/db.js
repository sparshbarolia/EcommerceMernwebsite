import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.mongo_url)
        console.log("Database connected".bgMagenta.white);
    }
    catch(error){
        console.log(`error in Mongodb ${error}`.bgRed.white)
    }
}

export default connectDB;

// export async function connectDB() {
//     try{await mongoose.connect('mongodb+srv://admin:admin@cluster0.ue8ifsq.mongodb.net/?retryWrites=true&w=majority' , {
//         dbName: "backendapi"
//     });
//     console.log("Database connected");}
//     catch(err){console.log(err)}
// }

