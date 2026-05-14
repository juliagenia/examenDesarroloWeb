// src/models/product.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js"; // Ajusta la ruta según tu proyecto

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  stockMinimo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "products",
  timestamps: true, // crea createdAt y updatedAt
});

export default Product;

