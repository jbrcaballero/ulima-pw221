# Creación de Proyectos con sequelize-cli

sequelize-cli nos permitirá realizar varias operaciones como la inicialización de la base de datos, creación de modelos y migraciones, a través de una interfaz de línea de comandos. En este proyecto mostraremos los paso para poder realizar la creación de la estructura del proyecto y los modelos asociados.

## Instalación de sequelize-cli

Puede trabajarse de varias formas, por ejemplo, se puede instalar localmente como una dependencia de desarrollo:

    npm install -D sequelize-cli

También es posible trabajar con sequelize-cli globalmente, de forma que podamos invocar a los comandos de forma directa (sin utilizar npx). Podremos realizar esta invocación dentro de cualquier proyecto. Para el curso utilizaremos esta última opción:

    npm install -g sequelize-cli


## Inicializar proyecto

Para poder generar la estructura de archivos inicial ejecutamos el siguiente comando:

    sequelize init

Este comando realizará la creación de un conjunto de carpetas: config, models, migrations y seeders.

El archivo *config/config.json* contiene la información de conexión a la base de datos, la cual puede configurarse para los distintos entornos (desarrollo, pruebas y producción). Por ejemplo, podemos configurar una conexión para ambiente de desarrollo editando el segmento correspondiente:

    "development": {
    "username": "nombre_usuario",
    "password": "contrasenia",
    "database": "nombre_bd",
    "host": "servidor",
    "dialect": "postgres"
    }

## Crear la base de datos

Cuando el proyecto inicia, es recomendable la creación de una base de datos independiente para las tablas asociadas. El atributo *database* de la configuración permite colocar el nombre de la base de datos que utilizaremos. Para poderla crear utilizaremos el siguiente comando:

    sequelize db:create

## Crear Modelos

sequelize-cli permite la creación de modelos, los cuales se relacionarán a tablas de nuestro esquema de base de datos. La creación de las tablas y modificaciones de datos pueden realizarse sin necesidad de trabajar con código SQL. Para poder crear un modelo, debemos especificar su nombre y el listado de atributos que tiene separado por comas. El siguiente comando permite crear el modelo *Employee* con los atributos *id*, *first_name*, *salary* y *hire_date*:

    sequelize model:generate --name Employee --attributes id:integer,name:string,salary:float,hireDate:date

## Ejecutar Migración

Tal como se observa, la creación del modelo crea un nuevo archivo en la carpeta *models* (correspondiente al modelo que acabamos de crear) y un archivo en la carpeta *migrations*. Para poder realizar la creación de la tabla asociada podemos realizar una migración:

    sequelize db:migrate

Esta migración realizará la creación de las tablas, como podremos comprobar en nuestra base de datos.

## Crear Seed

Los archivos *seed* permiten, por ejemplo, la inserción de regisrtos de prueba. Podemos utilizarlos para nuestra carga inicial de datos. El comando siguiente creará un nuevo archivo *seed* en nuestra carpeta *seeders*:

    sequelize seed:generate --name demo-employees

En el archivo generado podemos implementar los métodos *up* y *down* para definir las acciones que se realizarán al ejecutar la migración (para crear los registros) o revertirla (eliminando los registros) respectivamente.

Por ejemplo, este bloque de código insertará dos registros de prueba:

    await queryInterface.bulkInsert('Employees', [{
        id: 100,
        name: "Steven King",
        salary: 24000,
        hireDate: new Date(2019, 1, 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 101,
        name: "Neena Kochhar",
        salary: 17000,
        hireDate: new Date(2019, 1, 1),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

Una vez finalizado el archivo podemos ejecutarlo con el siguiente comando:

    sequelize db:seed:all

De esta forma se ejecutarán todos los archivos seed pendientes. En caso se quiera ejecutar uno específico se podrá realizar de esta forma:

    sequelize db:seed --seed nombre_archivo.js
