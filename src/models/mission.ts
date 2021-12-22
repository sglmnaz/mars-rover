import { Planet } from './planet';
import { Rover } from './rover';

export class Mission {
	static planet = new Planet({ width: 10, height: 10 }, [
		{ x: 1, y: 0 },
		{ x: 1, y: 7 },
		{ x: 3, y: 5 },
		{ x: 6, y: 8 },
	]);
	static rover = new Rover(Mission.planet);

	//prints the current state of the mission, 🟩 = empty position, 🔼 = rover, 🟥 = obstacle.
	static printStatus() {
		let map = '';
		for (let y = Mission.planet.size.height - 1; y >= 0; y--) {
			for (let x = 0; x < Mission.planet.size.width; x++) {
				if (Mission.rover.state.coordinates.x == x && Mission.rover.state.coordinates.y == y) {
					const heading = Mission.rover.state.heading;
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
			`coordinates: ( ${Mission.rover.state.coordinates.x} , ${Mission.rover.state.coordinates.y} ) \n` +
			`heading: ${Mission.rover.state.heading} `
		);
	}
}
