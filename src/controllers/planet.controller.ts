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

			if (!Mission.planet.hasPosition(position)) {
				return res.status(400).send('position is outside the planet width/height');
			}

			if (Mission.planet.hasObstacle(position)) {
				return res.status(400).send('position is already occupied');
			}

			Mission.planet.insertObstacle(position);
		} catch (error) {
			return res.status(500).send(error);
		}
		return res.status(200).send(Mission.jsonStatus());
	}

	removeObstacle(req: Request, res: Response, next: NextFunction) {
		try {
			const position: Coordinates = req.body;

			if (position.x == null || position.y == null) {
				return res.status(400).send('req body is not Coordinates type');
			}

			if (!Mission.planet.hasObstacle(position)) {
				return res.status(400).send('position does not have an obstacle');
			}

			Mission.planet.removeObstacle(position);
		} catch (error) {
			return res.status(500).send(error);
		}
		return res.status(200).send(Mission.jsonStatus());
	}

	randomizeObstacles(req: Request, res: Response, next: NextFunction) {
		try {
			const count: number = +req.params.count;
			if (isNaN(count)) throw 'count is not a number';
			Mission.planet.randomizeObstacles(count);
		} catch (error) {
			return res.status(400).send(error);
		}
		return res.status(200).send(Mission.jsonStatus());
	}

	setSize(req: Request, res: Response, next: NextFunction) {
		try {
			const size: Size = req.body;
			if (size.width == null || size.height == null) {
				return res.status(400).send('req body is not Size type');
			}

			if (size.width < 1 || size.height < 1) {
				return res.status(400).send('width and height must be >= 1');
			}

			Mission.planet.setSize(size);
		} catch (error) {
			return res.status(500).send(error);
		}
		return res.status(200).send(Mission.jsonStatus());
	}

	getSize(req: Request, res: Response, next: NextFunction) {
		return res.status(200).send(Mission.planet.getSize());
	}

	getObstacles(req: Request, res: Response, next: NextFunction) {
		return res.status(200).send(Mission.planet.getObstacles());
	}
}
