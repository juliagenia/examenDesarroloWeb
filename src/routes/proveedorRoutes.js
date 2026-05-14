// src/routes/proveedorRoutes.js
import { Router } from "express";
import Proveedor from "../models/proveedor.js";

const router = Router();

router.get("/", async (req, res) => {
  const proveedores = await Proveedor.findAll();
  res.json(proveedores);
});

router.get("/:id", async (req, res) => {
  const proveedor = await Proveedor.findByPk(req.params.id);
  if (!proveedor) return res.status(404).json({ error: "Proveedor no encontrado" });
  res.json(proveedor);
});

router.post("/", async (req, res) => {
  try {
    const nuevo = await Proveedor.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const proveedor = await Proveedor.findByPk(req.params.id);
  if (!proveedor) return res.status(404).json({ error: "Proveedor no encontrado" });
  await proveedor.update(req.body);
  res.json(proveedor);
});

router.delete("/:id", async (req, res) => {
  const proveedor = await Proveedor.findByPk(req.params.id);
  if (!proveedor) return res.status(404).json({ error: "Proveedor no encontrado" });
  await proveedor.destroy();
  res.json({ message: "Proveedor eliminado" });
});

export default router;
