// src/models/pedidoProducto.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js"; // Ajusta la ruta según tu proyecto

const PedidoProducto = sequelize.define("PedidoProducto", {
  
  cantidadComprada: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  precioHistorico: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idPedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "pedido_productos",
  timestamps: true,
});

export default PedidoProducto;
