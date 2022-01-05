import { Application, Request, Response, NextFunction } from 'express';
import { MissionController } from '../controllers/mission.controller';
import { RouteInterface } from '../models/route.interface';

export class MissionRoutes implements RouteInterface {
	private missionController = new MissionController();

	constructor(public app: Application, basePath: string = '') {
		this.addRoutes(basePath);
	}

	addRoutes(basePath: string): void {
		this.app.get(`/${basePath}/`, (req: Request, res: Response, next: NextFunction) => {
			return this.missionController.getState(req, res, next);
		});
	}
}
