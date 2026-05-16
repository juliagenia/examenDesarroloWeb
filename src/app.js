import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { router } from './routes/index.js';

const app = express();

// Configuración de Middlewares (IMPORTANTE: colocar antes de las rutas)
app.use(cors());           // Permite que React se conecte
app.use(morgan('dev'));    // Muestra las peticiones en consola
app.use(express.json());   // Entiende los objetos JSON

// Registro de rutas (Se cambia 'routes' por 'router')
app.use("/", router);

export default app;
