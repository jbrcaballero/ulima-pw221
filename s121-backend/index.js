import express from 'express';
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('<h1>Programación web</h1><h2>Bienvenidos</h2>');
});

app.get('/saludo/:nombre', (req, res) => {
    console.log(req.params.nombre);
    res.send(`Hola ${req.params.nombre}`);
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

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    taskList.push(newTask);
    res.send('Registrado correctamente');    
});

app.get('/tasks:id', (req, res) => {
    res.json(taskList.filter(task => task.id === req.params.id));
});

app.listen(port, _ => {
    console.log(`Servidor ejecutandose en el puerto ${port}`)
});
