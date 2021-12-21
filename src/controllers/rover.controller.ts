import { Request, Response, NextFunction } from 'express';
import { Mission } from '../models/mission';

export class RoverController {
	get(req: Request, res: Response, next: NextFunction) {
		Mission.rover.move('F');
		Mission.printStatus();
		return res.status(200).send('test route works');
	}
}
