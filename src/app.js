
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

const app = express();

// middleware
app.use(express.json());

// router 
app.use("/api",productRouter)

// server
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})

export const viteNodeApp = app;