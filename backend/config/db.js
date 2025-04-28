import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://yadavahc:Yadava%40123@cluster0.02u6ysh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.