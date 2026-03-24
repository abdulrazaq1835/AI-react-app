import mongoose, { mongo } from "mongoose"

const connectDb  = async()=>{
  try {
    const url =  process.env.MONGO_URI

    await mongoose.connect(url)
     console.log('MongoDB connected successfully');

    
  } catch (error) {
      console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}


export default connectDb

