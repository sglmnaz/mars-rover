import { Orientation } from '../types/orientation.type';
import { Planet } from './planet';
import { Rover } from './rover';

export class Mission {
	static planet = new Planet({ width: 10, height: 10 }, 10);
	static rover = new Rover(Mission.planet);

	static jsonStatus() {
		let map = [];
		for (let y = 0; y < Mission.planet.getSize().height; y++) {
			let row: any[] = [];
			for (let x = 0; x < Mission.planet.getSize().width; x++) {
				let cell: { x: number; y: number; rover?: boolean; heading?: Orientation; obstacle?: boolean } = { x: x, y: y };
				if (Mission.rover.getPosition().x == x && Mission.rover.getPosition().y == y) {
					const heading = Mission.rover.getHeading();
					cell.rover = true;
					cell.heading = heading;
				} else if (Mission.planet.hasObstacle({ x, y })) {
					cell.obstacle = true;
				}
				row.push(cell);
			}
			map.push(row);
		}

		return map;
	}
}
