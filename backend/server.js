import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

// app config

const app = express()

const port = 4000

// middleware

app.use(express.json())
app.use(cors())

// db connection 

connectDB();

// api end point 

app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)





app.get("/", (req, res) => {
    res.send("Hello vivek")
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port http://localhost:${port}`)
})

