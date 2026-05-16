// src/models/proveedor.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js"; // Ajusta la ruta según tu proyecto

const Proveedor = sequelize.define("Proveedor", {
 
  razonSocial: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, {
  tableName: "proveedores",
  timestamps: true, // crea createdAt y updatedAt
});

export  default Proveedor;
