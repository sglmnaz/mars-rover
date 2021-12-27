import { Application, Request, Response, NextFunction } from 'express';
import { RouteInterface } from '../models/route.interface';
import { RoverController } from '../controllers/rover.controller';

export class RoverRoutes implements RouteInterface {
	private roverController = new RoverController();

	constructor(public app: Application, basePath: string = '') {
		this.addRoutes(basePath);
	}

	addRoutes(basePath: string): void {
		this.app.get(`/${basePath}/`, (req: Request, res: Response, next: NextFunction) => {
			return this.roverController.getState(req, res, next);
		});

		this.app.get(`/${basePath}/reset`, (req: Request, res: Response, next: NextFunction) => {
			return this.roverController.resetState(req, res, next);
		});

		this.app.post(`/${basePath}/`, (req: Request, res: Response, next: NextFunction) => {
			return this.roverController.giveCommands(req, res, next);
		});
	}
}
