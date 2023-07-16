import express from "express"
require('dotenv').config();
import configViewEngine from "./config/configView";
import initRouteWeb from "./router/homeRoute";
import connectDB from "./config/connectDB";
const app = express()
const port = process.env.PORT;
configViewEngine(app)
initRouteWeb(app)
connectDB();
app.listen(port,()=>{
    console.log(`server is running with http://localhost:${port}`)
}) 