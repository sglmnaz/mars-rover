import { Planet } from './planet';
import { Rover } from './rover';

export class Mission {
	static planet = new Planet({ width: 10, height: 10 }, 10);
	static rover = new Rover(Mission.planet);

	//prints the current state of the mission, 🟩 = empty position, 🔼 = rover, 🟥 = obstacle.
	static printStatus() {
		let map = '';
		for (let y = Mission.planet.getSize().height - 1; y >= 0; y--) {
			for (let x = 0; x < Mission.planet.getSize().width; x++) {
				if (Mission.rover.getPosition().x == x && Mission.rover.getPosition().y == y) {
					const heading = Mission.rover.getHeading();
					map += heading == 'N' ? '🔼' : heading == 'E' ? '▶️' : heading == 'S' ? '🔽' : '◀️';
				} else if (Mission.planet.hasObstacle({ x, y })) map += '🟥';
				else map += '🟩';
			}
			map += '\n';
		}
		// console.log(map);
		// console.log(Mission.rover.state);
		return (
			map +
			`coordinates: ( ${Mission.rover.getPosition().x} , ${Mission.rover.getPosition().y} ) \n` +
			`heading: ${Mission.rover.getHeading()} `
		);
	}
}
