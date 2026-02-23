import express from "express";
import Product from "../models/Product.js";
import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Create Product (Admin)
router.post("/", protect, admin, async (req, res) => {
  const { name, price, image, description } = req.body;

  const product = await Product.create({
    name,
    price,
    image,
    description,
  });

  res.json(product);
});

// Delete Product (Admin)
router.delete("/:id", protect, admin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;