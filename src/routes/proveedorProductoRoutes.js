// src/routes/proveedorProductoRoutes.js
import { Router } from "express";
import ProveedorProducto from "../models/proveedorProducto.js";

const router = Router();

// GET all relaciones proveedor-producto
router.get("/", async (req, res) => {
  try {
    const relaciones = await ProveedorProducto.findAll();
    res.json(relaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET by ID
router.get("/:id", async (req, res) => {
  try {
    const relacion = await ProveedorProducto.findByPk(req.params.id);
    if (!relacion) return res.status(404).json({ error: "Relación no encontrada" });
    res.json(relacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create
router.post("/", async (req, res) => {
  try {
    const nueva = await ProveedorProducto.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update
router.put("/:id", async (req, res) => {
  try {
    const relacion = await ProveedorProducto.findByPk(req.params.id);
    if (!relacion) return res.status(404).json({ error: "Relación no encontrada" });
    await relacion.update(req.body);
    res.json(relacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const relacion = await ProveedorProducto.findByPk(req.params.id);
    if (!relacion) return res.status(404).json({ error: "Relación no encontrada" });
    await relacion.destroy();
    res.json({ message: "Relación eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
