
import express from "express";
import productRouter from "./routes/product";
import mongoose from "mongoose";
const app = express();

// middleware
app.use(express.json());

// router 
app.use("/api",productRouter)

mongoose.connect("mongodb://localhost:27017/WE17307");
export const viteNodeApp = app;