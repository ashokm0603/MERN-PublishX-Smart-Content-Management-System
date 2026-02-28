const express=require("express")
const app =express() 
const env=require("dotenv")

const connection=require("./config/database")
env.config()
connection()
const PORT=process.env.PORT;
const userRouter=require("./routes/UserRoute")
const postRouter=require("./routes/PostRoute")
const cors=require("cors")
app.use(cors())
app.use(express.json())

//this root api path
app.use("/api",userRouter)
app.use("/api",postRouter)
app.listen(PORT,()=>{
    console.log("Server Running Successfully👍🏻 on Port :",PORT);
    
})