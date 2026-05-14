// src/models/categoria.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js"; // Ajusta la ruta según tu proyecto

const Categoria = sequelize.define("Categoria", {
  
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  areaAlmacenamiento: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
}, {
  tableName: "categorias",
  timestamps: true, // crea createdAt y updatedAt
});

export default Categoria;
