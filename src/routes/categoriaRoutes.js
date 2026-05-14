// src/routes/categoriaRoutes.js
import { Router } from "express";
import Categoria from "../models/categoria.js";

const router = Router();

router.get("/", async (req, res) => {
  const categorias = await Categoria.findAll();
  res.json(categorias);
});

router.post("/", async (req, res) => {
  try {
    const nueva = await Categoria.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
