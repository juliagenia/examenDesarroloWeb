// src/models/proveedorProducto.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js"; // Ajusta la ruta según tu proyecto

const ProveedorProducto = sequelize.define("ProveedorProducto", {

  costoUnitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  tiempoEntregaDias: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idProveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "proveedor_productos",
  timestamps: true,
});

export default ProveedorProducto;
