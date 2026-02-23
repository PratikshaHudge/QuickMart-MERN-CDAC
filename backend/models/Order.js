import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      name: String,
      price: Number,
      qty: Number,
    },
  ],
  totalAmount: Number,
});

export default mongoose.model("Order", orderSchema);