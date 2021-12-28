import express, { Application } from 'express';
import { PlanetRoutes } from './routes/planet.routes';
import { RoverRoutes } from './routes/rover.routes';
const app: Application = express();
const port = process.env.PORT || 8810;

app.use(express.json());

app.listen(port, () => {
	setupRoutes();
	console.log(`app started on port ${port}`);
});

function setupRoutes() {
	new RoverRoutes(app, 'rover');
	new PlanetRoutes(app, 'planet');
}
