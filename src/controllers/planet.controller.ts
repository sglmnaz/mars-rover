import { Request, Response, NextFunction } from 'express';
import { Coordinates } from '../models/coordinates.interface';
import { Mission } from '../models/mission';
import { Size } from '../models/size.interface';

export class PlanetController {
	insertObstacle(req: Request, res: Response, next: NextFunction) {
		try {
			const position: Coordinates = req.body;
			if (position.x == null || position.y == null) {
				return res.status(400).send('req body is not Coordinates type');
			}

			Mission.planet.insertObstacle(position);
		} catch (error) {
			return res.status(500).send(error);
		}
		return res.status(200).send(Mission.printStatus());
	}

	removeObstacle(req: Request, res: Response, next: NextFunction) {
		try {
			const position: Coordinates = req.body;
			if (position.x == null || position.y == null) {
				return res.status(400).send('req body is not Coordinates type');
			}

			Mission.planet.removeObstacle(position);
		} catch (error) {
			return res.status(500).send(error);
		}
		return res.status(200).send(Mission.printStatus());
	}

	randomizeObstacles(req: Request, res: Response, next: NextFunction) {
		try {
			const count: number = +req.params.count;
			if (isNaN(count)) throw 'count is not a number';
			Mission.planet.randomizeObstacles(count);
		} catch (error) {
			return res.status(400).send(error);
		}
		return res.status(200).send(Mission.printStatus());
	}

	setSize(req: Request, res: Response, next: NextFunction) {
		try {
			const size: Size = req.body;
			if (size.width == null || size.height == null) {
				return res.status(400).send('req body is not Size type');
			}

			Mission.planet.setSize(size);
		} catch (error) {
			return res.status(500).send(error);
		}
		return res.status(200).send(Mission.printStatus());
	}

	getSize(req: Request, res: Response, next: NextFunction) {
		return res.status(200).send(Mission.planet.getSize());
	}

	getObstacles(req: Request, res: Response, next: NextFunction) {
		return res.status(200).send(Mission.planet.getObstacles());
	}
}
