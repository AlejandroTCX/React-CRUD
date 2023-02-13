const { Router } = require('express');
const {
	getAlltaks,
	getTask,
	createTask,
	actuaizandoTarea,
	borrandoTarea,
} = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getAlltaks);

router.post('/tasks', createTask);

router.delete('/tasks/:id', borrandoTarea);

router.put('/tasks/:id', actuaizandoTarea);

router.get('/tasks/:id', getTask);

module.exports = router;
