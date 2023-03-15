
// import http from 'http'

// const server = http.createServer(function (req, res) {

//     if(req.url == "/"){
//         res.setHeader("Content-Type", "text/html");
//         res.end(`
//         <form action="/about" method="POST">
//         <input type="text" name="name" placeholder="Enter your name">
//         <button>Submit</button>
//         </form>
//         `)
//     }

//     if (req.url == "/about" && req.method == "POST") {

//        res.end(`
//          <h1>Thank you for submitting the form</h1>
//        `)

//     }
// })
import express from "express";
import productRouter from "./routes/product";
import mongoose from "mongoose";
const app = express();

// middleware
app.use(express.json());

// router 
app.use("/api",productRouter)

mongoose.connect("mongodb://localhost:27017/we17307");
export const viteNodeApp = app;
///test