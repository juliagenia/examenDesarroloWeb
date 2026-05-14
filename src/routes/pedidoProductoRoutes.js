// src/routes/pedidoProductoRoutes.js
import { Router } from "express";
import PedidoProducto from "../models/pedidoProducto.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const detalles = await PedidoProducto.findAll();
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const detalle = await PedidoProducto.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: "Detalle no encontrado" });
    res.json(detalle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevo = await PedidoProducto.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const detalle = await PedidoProducto.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: "Detalle no encontrado" });
    await detalle.update(req.body);
    res.json(detalle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const detalle = await PedidoProducto.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: "Detalle no encontrado" });
    await detalle.destroy();
    res.json({ message: "Detalle eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
