// src/routes/productRoutes.js
import { Router } from "express";
import Product from "../models/product.js";

const router = Router();

// GET all products
router.get("/", async (req, res) => {
  try {
    const productos = await Product.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET product by ID
router.get("/:id", async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create product
router.post("/", async (req, res) => {
  try {
    const nuevo = await Product.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update product
router.put("/:id", async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    await producto.update(req.body);
    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE product
router.delete("/:id", async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    await producto.destroy();
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
