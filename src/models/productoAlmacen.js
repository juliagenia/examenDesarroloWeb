// src/models/productoAlmacen.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js"; // Ajusta la ruta según tu proyecto

const ProductoAlmacen = sequelize.define("ProductoAlmacen", {
  
  cantidadDisponible: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idAlmacen: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "producto_almacenes",
  timestamps: true,
});

export default ProductoAlmacen;

