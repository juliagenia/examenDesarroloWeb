// src/models/almacen.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js"; 

const Almacen = sequelize.define("Almacen", {
 
  nombreSede: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccionFisica: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
}, {
  tableName: "almacenes",
  timestamps: true, // crea createdAt y updatedAt
});

export default Almacen;
