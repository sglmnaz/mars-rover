import { Coordinates } from './coordinates.interface';
import { Size } from './size.interface';

export class Planet {
	private size: Size;
	private obstacles: Coordinates[];

	constructor(size: Size, obstacles: Coordinates[]) {
		this.size = size;
		this.obstacles = obstacles;
	}

	//returns true if the planet has an obstacle at the specified position
	hasObstacle(position: Coordinates) {
		for (const obstacle of this.obstacles) {
			if (obstacle.x == position.x && obstacle.y == position.y) return true;
		}

		return false;
	}

	insertObstacle(position: Coordinates) {
		this.obstacles.push(position);
	}

	removeObstacle(position: Coordinates) {
		this.obstacles = this.obstacles.filter((item) => {
			return item.x != position.x || item.y != position.y;
		});
	}

	clearObstacles() {
		this.obstacles = [];
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
