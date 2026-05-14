// src/routes/index.js
import { Router } from "express";
import productRoutes from "./productRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";
import proveedorRoutes from "./proveedorRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";
import clienteRoutes from "./clienteRoutes.js";
import almacenRoutes from "./almacenRoutes.js";
import proveedorProductoRoutes from "./proveedorProductoRoutes.js";
import pedidoProductoRoutes from "./pedidoProductoRoutes.js";
import productoAlmacenRoutes from "./productoAlmacenRoutes.js";

const router = Router();

router.use("/api/products", productRoutes);
router.use("/api/categorias", categoriaRoutes);
router.use("/api/proveedores", proveedorRoutes);
router.use("/api/pedidos", pedidoRoutes);
router.use("/api/clientes", clienteRoutes);
router.use("/api/almacenes", almacenRoutes);
router.use("/api/proveedor-productos", proveedorProductoRoutes);
router.use("/api/pedido-productos", pedidoProductoRoutes);
router.use("/api/producto-almacenes", productoAlmacenRoutes);

export default router;


