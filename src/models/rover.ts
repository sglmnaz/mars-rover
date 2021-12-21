import { Direction } from '../types/direction.type';
import { Orientation } from '../types/orientation.type';
import { Planet } from './planet';
import { RoverState } from './rover-sate.interface';

export class Rover {
	constructor(public planet: Planet, public state: RoverState = { coordinates: { x: 0, y: 0 }, heading: 'N' }) {}

	rotate(orientation: Orientation) {
		switch (this.state.heading) {
			case 'N':
				this.state.heading = orientation == 'R' ? 'E' : 'O';
				break;
			case 'E':
				this.state.heading = orientation == 'R' ? 'S' : 'N';
				break;
			case 'S':
				this.state.heading = orientation == 'R' ? 'O' : 'E';
				break;
			case 'O':
				this.state.heading = orientation == 'R' ? 'N' : 'S';
				break;
		}
	}

	move(direction: Direction) {
		const destination = { ...this.state.coordinates };

		switch (this.state.heading) {
			case 'N':
				destination.y = destination.y + (direction == 'F' ? 1 : -1);
				break;
			case 'E':
				destination.x = destination.x + (direction == 'F' ? 1 : -1);
				break;
			case 'S':
				destination.y = destination.y + (direction == 'F' ? -1 : 1);
				break;
			case 'O':
				destination.x = destination.x + (direction == 'F' ? -1 : 1);
				break;
		}

		if (destination.y >= this.planet.size.height) destination.y = destination.y - this.planet.size.height;
		if (destination.y < 0) destination.y = this.planet.size.height + destination.y;
		if (destination.x >= this.planet.size.width) destination.x = destination.x - this.planet.size.width;
		if (destination.x < 0) destination.x = this.planet.size.width + destination.x;

		if (this.planet.hasObstacle(destination)) {
			console.log(`COMMAND ABORTED: rover has encountered an obstacle in position (${destination.x + ',' + destination.y}).`);
			return false;
		}

		this.state.coordinates = destination;
		return true;
	}
}
