// src/routes/almacenRoutes.js
import { Router } from "express";
import Almacen from "../models/almacen.js";

const router = Router();

router.get("/", async (req, res) => {
  const almacenes = await Almacen.findAll();
  res.json(almacenes);
});

router.get("/:id", async (req, res) => {
  const almacen = await Almacen.findByPk(req.params.id);
  if (!almacen) return res.status(404).json({ error: "Almacén no encontrado" });
  res.json(almacen);
});

router.post("/", async (req, res) => {
  try {
    const nuevo = await Almacen.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const almacen = await Almacen.findByPk(req.params.id);
  if (!almacen) return res.status(404).json({ error: "Almacén no encontrado" });
  await almacen.update(req.body);
  res.json(almacen);
});

router.delete("/:id", async (req, res) => {
  const almacen = await Almacen.findByPk(req.params.id);
  if (!almacen) return res.status(404).json({ error: "Almacén no encontrado" });
  await almacen.destroy();
  res.json({ message: "Almacén eliminado" });
});

export default router;
