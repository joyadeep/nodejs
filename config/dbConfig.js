import mongoose from "mongoose";
const dbConfig=async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("connected to database successfully");

let db =await mongoose.connection;

await db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
await db.on('error', console.error.bind(console, 'MongoDB connection error:'));
} catch (error) {
    console.log("Error : cannot connect ",error)
}
}

export default dbConfig;