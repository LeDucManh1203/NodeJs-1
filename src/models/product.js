import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    categoryId:{
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
});

export default mongoose.model("Product", productSchema);
