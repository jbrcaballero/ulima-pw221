import sequelize from './db.js';
import Sequelize from 'sequelize';

export const Project = sequelize.define('project',{
    id: {type: Sequelize.INTEGER, primaryKey: true},
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
});