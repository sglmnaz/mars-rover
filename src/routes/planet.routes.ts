import { Application, Request, Response, NextFunction } from 'express';
import { PlanetController } from '../controllers/planet.controller';
import { RouteInterface } from '../models/route.interface';

export class PlanetRoutes implements RouteInterface {
	private planetController = new PlanetController();

	constructor(public app: Application, basePath: string = '') {
		this.addRoutes(basePath);
	}

	addRoutes(basePath: string): void {
		this.app.get(`/${basePath}/size`, (req: Request, res: Response, next: NextFunction) => {
			return this.planetController.getSize(req, res, next);
		});

		this.app.post(`/${basePath}/size`, (req: Request, res: Response, next: NextFunction) => {
			return this.planetController.setSize(req, res, next);
		});

		this.app.get(`/${basePath}/obstacles`, (req: Request, res: Response, next: NextFunction) => {
			return this.planetController.getObstacles(req, res, next);
		});

		this.app.post(`/${basePath}/obstacles`, (req: Request, res: Response, next: NextFunction) => {
			return this.planetController.insertObstacle(req, res, next);
		});

		this.app.post(`/${basePath}/obstacles/randomize/:count`, (req: Request, res: Response, next: NextFunction) => {
			return this.planetController.randomizeObstacles(req, res, next);
		});

		this.app.delete(`/${basePath}/obstacles`, (req: Request, res: Response, next: NextFunction) => {
			return this.planetController.removeObstacle(req, res, next);
		});
	}
}
