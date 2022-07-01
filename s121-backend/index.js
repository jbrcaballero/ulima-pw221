//Importamos los paquetes que vamos a utilizar
//Para utilizar 'import' modificamos package.json considerando "type": "module".

//Para la parte web utilizaremos Express
//Para incluirlo en un proyecto nuevo: npm install postgres
import express from 'express';

//Paquete para poder utilizar Postgres
//Para incluirlo en un proyecto nuevo: npm install pg
import pg from 'pg';

//Paquete para poder realizar el mapeo objeto-relacional (ORM) y manejar 
//persistencia de forma simple
//Para incluirlo en un proyecto nuevo: npm install sequelize
import { Sequelize } from 'sequelize';

//Creamos una nueva aplicación utilizando Express
const app = express();
//Variable que utilizaremos para iniciar la aplicación (importante que el puerto
//no esté ocupado)
const PORT = 5000;
/*
app.listen permite iniciar el servidor y empieza a "escuchar" (esperar 
conexiones) en el puerto indicado.
Recibe el puerto y un callback (función) que se ejecutará al iniciar.
En nuestro caso utilizaremos notación flecha para esta función y colocaremos un
mensaje
*/
app.listen(PORT, _ => {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
});

/*
Podemos crear distintos "routes" para poder procesar las solicitudes realizadas
a una ruta específica. Para ello tenemos distintas funciones relacionadas a los
métodos HTTP (get, post, put, etc).

En este ejemplo, utilizamos app.get para poder manejar las solicitudes con el 
método GET a la raíz de mi aplicación,
Por ejemplo, si estamos trabajando en http://localhost:5000, se asociará con 
este "route" directamente y se enviará la respuesta.

Estos métodos reciben 2 parámetros: el primero es la ruta que se asociará y el
segundo es una función callback que indicará el manejo que se realizará a la 
solicitud. La definimos con 2 parámetros de entrada, el primero representará
la solicitud (request) y el segundo la respuesta (response).
*/
app.get('/', (req, res) => {
    /*
    Para este caso no procesaremos ningún parámetro de la solicitud, solo 
    retornaremos un texto (que se interpretará) como HTML
    */
    res.send('<h1>Programación web</h1><h2>Bienvenidos</h2>');
});

/*
Muchas veces, al enviar una solicitud deberemos considerar datos de entrada.
Estos pueden enviarse como parámetros o dentro del cuerpo (body) de la
solicitud.

Podemos enviar parámetros a través de la dirección URL. Tomaremos en cuenta 
el nombre que le queremos dar al parámetro al definir la ruta.

En el ejemplo mostrado, se coloca como ruta '/saludo/:nombre'. Ello quiere
decir que el texto que vaya de la cadena '/saludo' se considerará como el 
valor del parámetro nombre.
Por ejemplo, si realizamos el llamado a 'http://localhost:5000/saludo/Juan'.el
valor del parámetro 'name' será 'Juan' con lo que podremos acceder a ese valor
a través del objeto req.params, el cual contendrá todos los parámetros 
asociados a la solicitud
*/
app.get('/saludo/:name', (req, res) => {
    res.send(`<h1>Hola ${req.params.name}</h1>`);
});

//También podemos recibir más de un parámetro como en este ejemplo
app.get('/saludo/:firstName/:lastName', (req, res) => {
    res.send(`Hola ${req.params.lastName}, ${req.params.firstName}`);
});

/*
Cuando trabajemos con servicios REST, tendremos los datos del cuerpo (body) 
de la solicitud y la respuesta en formato JSON.
Nos conviene manejar la conversión de estos datos de forma automática, a fin
de poder procesar la información de entrada de forma sencilla y retornar la 
respuesta en el formato adecuado.

Express permite manejar distintos middlewares para realizar un procesamiento
previo, un mapeo de variables u otro tipo de tareas. Para este ejemplo 
utilizaremos el middleware 'json', con el que podremos manejar datos en este
formato tanto en la solicitud como en la respuesta. 
*/
app.use(express.json());

/*
En esta primera versión de nuestros servicios REST, trabajaremos solamente
en memoria y utilizaremos el mismo formato de nuestro API de prueba. A 
continuación generamos 2 registros de prueba.
*/
let taskList = [];
const task1 = {id: 1, name: 'Create data model', done: false, projectId: 4};
const task2 = {id: 2, name: 'Develop component', done: false, projectId: 4};

taskList.push(task1);
taskList.push(task2);

//Procesaremos la llamada al API para obtener todas las tareas
app.get('/tasks', (req, res) => {
    res.json(taskList);
});

/*
Podemos manejar la búqueda utilizando parátros. Para ello utilizaremos el método 
'filter', el cual va a recibir una función callback que aplicará a cada uno de 
los elementos del array (y retornará verdadero o falso). El método retornará
un nuevo array, considerando solamente aquellos elementos para los que el
llamado a la función callback haya retornado verdadero.

Para este ejemplo igualamos el identificador de la tarea (de cada elemento del
array de tareas), con el parámetro 'id' de la solicitud. Obsérvese que el tipo
de dato del parámetro será string, por lo que comparamos con '=='. En caso se
necesite realizar operaciones con ese identificador, deberá convertirse a un
valor entero.
*/
app.get('/tasks/:id', (req, res) => {
    res.json(taskList.filter(task => task.id == req.params.id));
});

/*
El método POST suele utilizarse para crear un nuevo recurso o elemento. En
nuestro caso, crearemos una nueva tarea y la agregaremos al array creado.
Para ello es necesario que el cuerpo de la solicitud tenga todos los datos
que necesitamos, aquí un ejemplo (recuerde que el formato es JSON):
    {
        "id": 5,
        "name": "Migrate data",
        "done": false,
        "projectId": 4
    }
Es posible probar el llamado colocando este texto en el cuerpo del request
en una herramienta como Postman.
*/
app.post('/tasks', (req, res) => {
    /*
    Observe que es está registrando directamente (sería conveniente hacer
    una validación previa)
    */
    const newTask = req.body;
    taskList.push(newTask);
    //Para poder dar una respuesta debemos llamar al método 'send'
    res.send('Registrado correctamente');    
});

/*
Para nuestras aplicaciones, estaremos interactuando con bases de datos, en las
cuales tendremos almacenada la información de nuestras entidades. Veremos 2
formas de poder acceder a la información.

- Conexión directa y sentencias SQL (librería 'pg').
- ORM (Mapeo Objeto-Relacional) con la librería 'sequelize'.
*/


/*
Para poder conectarnos directamente con una BD Postgres, utilizaremos un objeto
Pool. El constructor recibe un objeto con los parámetros de conexión.
*/

const pool = new pg.Pool({
    //En caso nos estemos conectando a un servidor remoto, colocaremos la IP
    host: 'localhost',
    //Puede variar, el puerto por defecto es 5432
    port: 5432,
    //Nombre de usuario
    user: 'postgres',
    //Contraseña
    password: 'password',
    //Nombre de la base de datos
    database: 'postgres'
});

/*
Para obtener la información de los proyectos realizaremos un query a la tabla
PROJECTS (el script de creación se encuentra en la carpeta 'database')
*/
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

/*
Para el registro de proyectos utilizamos una sentencia SQL con parámetros. Cada
uno de ellos se identifica con un número secuencial: $1, $2, $3.
El método query recibe la sentencia SQL (en la que debe especificares la
posición de los parámetros) y un array con los valores de cada parámetro (en el
mismo orden.
    */
 
app.post('/api/v1/projects', (req, res) => {
    const { id, name, description} = req.body;
    //Utilizamos comillas invertidas a para trabajar con sentencias de varias líneas
    const sql = `INSERT INTO PROJECTS(id, name, description, "createdAt", "updatedAt") 
                 VALUES ($1, $2, $3, current_date, current_date)`;
    pool.query(sql, [id, name, description], (error, results) => {
        if(error) res.status(500).send(`{message: Error: ${error.message}}`);
        res.send('Registrado correctamente');
    });
});


/*
URL que podemos utilizar para configurar la conexión. Varía por cada motor de BD.
Para el caso de Postgres será:
    postgres://{usuario}:{password}@{host}:{puerto}/{nombreBD}
*/
const url = 'postgres://postgres:password@localhost:5432/postgres';
/*
Creamos una nueva instancia de Sequelize, que va a representar una conexión
con nuestra BD en función a los parámetros de la URL definida.
Como alternativa, podemos darle los parámetros independientemente:

*/
const sequelize1 = new Sequelize(url);

const sequelize = new Sequelize('postgres', 'postgres', 'password', {
    host: 'localhost', dialect: 'postgres'
});

//
await sequelize.authenticate();

/*
Definimos un modelo: este se asociara a una tabla de la BD: PROJECTS (en
nuestro caso ya está creda).
'define' recibe el nombre del modelo y un objeto con los atributos que
tendrá. Como consecuencia, se asociará a la tabla PROJECTS (plural).
*/
let Project = sequelize.define('project',{
    id: {type: Sequelize.INTEGER, primaryKey: true},
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
});

/*
Para poder hallar todas las tuplas de la tabla utilizamos 'findAll'
*/
app.get('/api/v2/projects', (req, res) => {
    Project.findAll().then(results => {
        res.send(results);
    });
});

