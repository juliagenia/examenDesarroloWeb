// src/routes/productoAlmacenRoutes.js
import { Router } from "express";
import ProductoAlmacen from "../models/productoAlmacen.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const registros = await ProductoAlmacen.findAll();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const registro = await ProductoAlmacen.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: "Registro no encontrado" });
    res.json(registro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevo = await ProductoAlmacen.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const registro = await ProductoAlmacen.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: "Registro no encontrado" });
    await registro.update(req.body);
    res.json(registro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const registro = await ProductoAlmacen.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: "Registro no encontrado" });
    await registro.destroy();
    res.json({ message: "Registro eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
