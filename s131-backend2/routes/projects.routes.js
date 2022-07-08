import { getProjects, getProjectById, createProject } from '../controllers/projects.controller.js';
import { Router } from 'express';

const router = Router();

router.get('/api/v2/projects', getProjects);
router.get('/api/v2/projects/:id', getProjectById);
router.post('/api/v2/projects', createProject);

export default router;