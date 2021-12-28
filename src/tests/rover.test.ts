import { Rover } from '../models/rover';
import { Planet } from '../models/planet';

const planet = new Planet({ width: 3, height: 3 });
const rover = new Rover(planet);

test('rover starts at (0,0)', () => {
	expect(rover.getPosition()).toStrictEqual({ x: 0, y: 0 });
});

test('rover can rotate right', () => {
	expect(rover.getHeading()).toBe('N');
	rover.rotate('R');
	expect(rover.getHeading()).toBe('E');
	rover.rotate('R');
	expect(rover.getHeading()).toBe('S');
	rover.rotate('R');
	expect(rover.getHeading()).toBe('W');
	rover.rotate('R');
	expect(rover.getHeading()).toBe('N');
});

test('rover can rotate left', () => {
	expect(rover.getHeading()).toBe('N');
	rover.rotate('L');
	expect(rover.getHeading()).toBe('W');
	rover.rotate('L');
	expect(rover.getHeading()).toBe('S');
	rover.rotate('L');
	expect(rover.getHeading()).toBe('E');
	rover.rotate('L');
	expect(rover.getHeading()).toBe('N');
});

test('rover can move', () => {
	rover.move('F');
	expect(rover.getPosition()).toStrictEqual({ x: 0, y: 1 });
	rover.move('B');
	expect(rover.getPosition()).toStrictEqual({ x: 0, y: 0 });
});
