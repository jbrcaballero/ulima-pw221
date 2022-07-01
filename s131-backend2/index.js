import express from 'express';
import pg from 'pg';
import { Sequelize } from 'sequelize';


const app = express();
const PORT = 5000;

app.listen(PORT, _ => {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
});

app.get('/', (req, res) => {
    res.send('<h1>Programación web</h1><h2>Bienvenidos</h2>');
});

app.get('/saludo/:name', (req, res) => {
    res.send(`<h1>Hola ${req.params.name}</h1>`);
});

app.get('/saludo/:firstName/:lastName', (req, res) => {
    res.send(`Hola ${req.params.lastName}, ${req.params.firstName}`);
});

app.use(express.json());

let taskList = [];
const task1 = {id: 1, name: 'Create data model', done: false, projectId: 4};
const task2 = {id: 2, name: 'Develop component', done: false, projectId: 4};

taskList.push(task1);
taskList.push(task2);

app.get('/tasks', (req, res) => {
    res.json(taskList);
});

app.get('/tasks/:id', (req, res) => {
    res.json(taskList.filter(task => task.id == req.params.id));
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    taskList.push(newTask);
    res.send('Registrado correctamente');    
});

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'postgres'
});

app.get('/api/v1/projects', (req, res) => {
    const sql = 'SELECT * FROM PROJECTS';
    pool.query(sql, (error, results) => {
        if(error){
            //throw(error);
            res.status(500).send(`{message: Error: ${error.message}}`);
        }else{
            res.json(results.rows);
        }        
    });
});
 
app.post('/api/v1/projects', (req, res) => {
    const { id, name, description} = req.body;
     const sql = `INSERT INTO PROJECTS(id, name, description, "createdAt", "updatedAt") 
                 VALUES ($1, $2, $3, current_date, current_date)`;
    pool.query(sql, [id, name, description], (error, results) => {
        if(error) res.status(500).send(`{message: Error: ${error.message}}`);
        res.send('Registrado correctamente');
    });
});

const sequelize = new Sequelize('postgres', 'postgres', 'password', {
    host: 'localhost', dialect: 'postgres'
});

await sequelize.authenticate();

let Project = sequelize.define('project',{
    id: {type: Sequelize.INTEGER, primaryKey: true},
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
});

app.get('/api/v2/projects', (req, res) => {
    Project.findAll().then(results => {
        res.send(results);
    });
});
