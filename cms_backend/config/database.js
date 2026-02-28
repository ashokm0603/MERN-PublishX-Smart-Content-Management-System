const mongoose=require("mongoose");

async function connection(){
    try {
       await mongoose.connect(process.env.MONGODB_URL)
       console.log("DB Connected successfully..");
    } catch (error) {
        console.log("Failed to connect DB");
    }
}

module.exports=connection;