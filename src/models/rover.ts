import { Direction } from '../types/direction.type';
import { Orientation } from '../types/orientation.type';
import { Rotation } from '../types/rotation.type';
import { Coordinats } from './coordinates.interface';
import { Planet } from './planet';
import { RoverState } from './rover-sate.interface';

export class Rover {
	private state: RoverState;
	private planet: Planet;

	constructor(planet: Planet, state: RoverState = { position: { x: 0, y: 0 }, heading: 'N' }) {
		this.state = state;
		this.planet = planet;
	}

	//rotates the rover of 90° left or right based on the input rotation
	rotate(rotation: Rotation) {
		switch (this.state.heading) {
			case 'N':
				this.setHeading(rotation == 'R' ? 'E' : 'W');
				break;
			case 'E':
				this.setHeading(rotation == 'R' ? 'S' : 'N');
				break;
			case 'S':
				this.setHeading(rotation == 'R' ? 'W' : 'E');
				break;
			case 'W':
				this.setHeading(rotation == 'R' ? 'N' : 'S');
				break;
		}
	}

	//moves the rover of 1 unit forward or backward based on the input direction
	move(direction: Direction) {
		const destination = { ...this.getPosition() };

		switch (this.getHeading()) {
			case 'N':
				destination.y = destination.y + (direction == 'F' ? 1 : -1);
				break;
			case 'E':
				destination.x = destination.x + (direction == 'F' ? 1 : -1);
				break;
			case 'S':
				destination.y = destination.y + (direction == 'F' ? -1 : 1);
				break;
			case 'W':
				destination.x = destination.x + (direction == 'F' ? -1 : 1);
				break;
		}

		if (destination.y >= this.planet.getSize().height) destination.y = destination.y - this.planet.getSize().height;
		if (destination.y < 0) destination.y = this.planet.getSize().height + destination.y;
		if (destination.x >= this.planet.getSize().width) destination.x = destination.x - this.planet.getSize().width;
		if (destination.x < 0) destination.x = this.planet.getSize().width + destination.x;

		if (this.planet.hasObstacle(destination)) {
			return {
				position: this.getPosition(),
				message: `COMMAND ABORTED: rover has encountered an obstacle in position (${destination.x + ',' + destination.y}).`,
			};
		}

		this.setPosition(destination);
		return { position: this.getPosition() };
	}

	getPosition() {
		return this.state.position;
	}

	setPosition(position: Coordinats) {
		this.state.position = position;
	}

	getHeading() {
		return this.state.heading;
	}

	setHeading(heading: Orientation) {
		this.state.heading = heading;
	}

	getState() {
		return this.state;
	}

	getPlanet() {
		return this.planet;
	}
}
