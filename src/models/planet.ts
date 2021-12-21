import { Coordinats } from './coordinates.interface';
import { Size } from './size.interface';

export class Planet {
	constructor(public size: Size, public obstacles: Coordinats[]) {}

	hasObstacle(point: Coordinats) {
		for (const obstacle of this.obstacles) {
			if (obstacle.x == point.x && obstacle.y == point.y) return true;
		}

		return false;
	}
}
