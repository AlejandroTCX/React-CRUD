const express = require('express');
const morgan = require('morgan');

const tasksRoutes = require('./routes/tasks.routes.js');

const DIRECTORIO_PERMITIDO_CORS = 'http://localhost:3000';

const app = express();

const cors = require('cors');

app.use(
	cors({
		origin: DIRECTORIO_PERMITIDO_CORS,
	})
);

app.use(morgan('dev'));

app.use(express.json());

app.use(tasksRoutes);

app.use(
	cors({
		origin: DIRECTORIO_PERMITIDO_CORS,
	})
);

app.use((err, req, res, next) => {
	return res.json({ message: err.message });
});

app.listen(4000);
console.log('listening on port 4000');
