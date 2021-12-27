import { Coordinats } from './coordinates.interface';
import { Size } from './size.interface';

export class Planet {
	private size: Size;
	private obstacles: Coordinats[];

	constructor(size: Size, obstacles: Coordinats[]) {
		this.size = size;
		this.obstacles = obstacles;
	}

	//returns true if the planet has an obstacle at the specified position
	hasObstacle(position: Coordinats) {
		for (const obstacle of this.obstacles) {
			if (obstacle.x == position.x && obstacle.y == position.y) return true;
		}

		return false;
	}

	setSize(size: Size) {
		this.size = size;
	}

	getSize() {
		return this.size;
	}

	getObstacles() {
		return this.obstacles;
	}
}
