import Sequelize from 'sequelize'
import config from '../config/config.json' assert { type: "json" };

//Obtenemos el entorno de ejecucion (de una variable de entorno). Desarrollo por defecto
const env = process.env.NODE_ENV || 'development';
//Obtenemos la configuración específica para ese entorno (de config/config.json)
const parameters = config[env];

const sequelize = new Sequelize(parameters);
export default sequelize;