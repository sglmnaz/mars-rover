import { Rover } from '../models/rover';
import { Planet } from '../models/planet';

const planet = new Planet({ width: 10, height: 10 }, []);
const rover = new Rover(planet);

test('rover starts at (0,0)', () => {
	expect(rover.getPosition()).toStrictEqual({ x: 0, y: 0 });
});
