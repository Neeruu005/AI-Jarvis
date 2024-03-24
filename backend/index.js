
import express from 'express'
import cors from  "cors"
import mongoose from "mongoose"
import router from './routes/route.js';


import dotenv from "dotenv"
dotenv.config()


const app = express();







app.use(cors());
app.use(express.json());

app.use("/contact",  router);





const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB);
  try {
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

connectDB();




app.listen(process.env.PORT, () =>
  console.log(`server is ready ${process.env.PORT}`)
);