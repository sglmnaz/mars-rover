import { Coordinates } from './coordinates.interface';
import { Size } from './size.interface';

export class Planet {
	private size: Size;
	private obstacles: Coordinates[] = [];

	constructor(size: Size, obstaclesCount: number = 0) {
		this.size = size;
		this.randomizeObstacles(obstaclesCount);
	}

	//returns true if the planet has an obstacle at the specified position
	hasObstacle(position: Coordinates) {
		for (const obstacle of this.obstacles) {
			if (obstacle.x == position.x && obstacle.y == position.y) return true;
		}

		return false;
	}

	//returns true if the specified position is inside the width/height of the planet
	hasPosition(position: Coordinates) {
		if (position.x > this.size.width - 1) return false;
		if (position.y > this.size.height - 1) return false;
		if (position.x < 0 || position.y < 0) return false;

		return true;
	}

	insertObstacle(position: Coordinates) {
		this.obstacles.push(position);
	}

	removeObstacle(position: Coordinates) {
		this.obstacles = this.obstacles.filter((item) => {
			return item.x != position.x || item.y != position.y;
		});
	}

	//generates n obstacles in random positions on the surface of the planet
	randomizeObstacles(count: number) {
		this.clearObstacles();

		for (let i = 0; i < count; i++) {
			let position: Coordinates = { x: 0, y: 0 };
			do {
				let max = this.size.width - 1;
				let min = 0;
				position.x = Math.floor(Math.random() * (max - min + 1) + min);
				max = this.size.height - 1;
				position.y = Math.floor(Math.random() * (max - min + 1) + min);
			} while (this.hasObstacle(position) || (position.x == 0 && position.y == 0));
			this.insertObstacle(position);
		}
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
