import { Project } from '../models/project.js';

export const getProjects = (req, res) => {
    if(req.query.name){
        Project.findOne({ where: { name: req.query.name } }).then(results => {
            res.send(results);
        });        
    }else{
        Project.findAll().then(results => {
            res.send(results);
        });
    }
};

export const getProjectById = (req, res) => {
    Project.findByPk(req.params.id).then(results => {
        res.send(results);
    });
}


export const createProject = (req, res) => {
    Project.create(req.body).then( _ => {
        res.send("Creado correctamente");
    });
}