import express, { Application } from 'express';
import { RoverRoutes } from './routes/rover.routes';
const app: Application = express();
const port = process.env.PORT || 8810;

app.listen(port, () => {
	setupRoutes();
	console.log(`server started on port ${port}`);
});

function setupRoutes() {
	new RoverRoutes(app, 'rover');
}
