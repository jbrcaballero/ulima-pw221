--CREACION DE TABLA
CREATE TABLE projects (
	id numeric(7) NOT NULL,
	name varchar(30) NOT NULL,
	description text NULL,
	--createdAt y updatedAt son campos de auditoría, con Sequelize se crean
	--por defecto, los agregamos para utilizar la librería de forma simple
	"createdAt" date NULL,
	--Las comillas dobles las colocamos para que se respeten las mayúsculas
	--en el nombre del campo
	"updatedAt" date NULL,
	CONSTRAINT projects_pkey PRIMARY KEY (id)
);
--AGREGAMOS LOS VALORES A LA TABLA
INSERT INTO public.projects
VALUES(1, 'Backend project', 'HR app with Node.js and Express', CURRENT_DATE,
 CURRENT_DATE);
INSERT INTO public.projects
VALUES(2, 'Frontend project', 'HR app with React', CURRENT_DATE, CURRENT_DATE);
INSERT INTO public.projects
VALUES(3, 'Fullstack project', 'Many tools', CURRENT_DATE, CURRENT_DATE);