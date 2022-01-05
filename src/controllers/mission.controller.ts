import { Request, Response, NextFunction } from 'express';
import { Mission } from '../models/mission';

export class MissionController {
	getState(req: Request, res: Response, next: NextFunction) {
		return res.status(200).send(Mission.jsonStatus());
	}
}
