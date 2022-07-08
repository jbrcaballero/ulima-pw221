import express from 'express';
import { Sequelize } from 'sequelize';
import cors from 'cors';
import greetingRoutes from './routes/greetings.routes.js'
import projectRoutes from './routes/projects.routes.js'

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(greetingRoutes);
app.use(projectRoutes);

app.listen(PORT, _ => {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
});