// src/models/cliente.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js"; // Ajusta la ruta según tu proyecto

const Cliente = sequelize.define("Cliente", {

  nombreUsuario: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  apellidoUsuario: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  correoElectronico: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  fechaRegistro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "clientes",
  timestamps: true, // crea createdAt y updatedAt
});

export default Cliente;
