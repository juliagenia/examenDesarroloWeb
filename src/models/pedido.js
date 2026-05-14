// src/models/pedido.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js"; // Ajusta la ruta según tu proyecto

const Pedido = sequelize.define("Pedido", {
 
  fechaCompra: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  estadoEnvio: {
    type: DataTypes.ENUM("pendiente", "enviado", "entregado", "cancelado"),
    allowNull: false,
    defaultValue: "pendiente",
  },
  montoTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "pedidos",
  timestamps: true, // crea createdAt y updatedAt
});

export default Pedido;
