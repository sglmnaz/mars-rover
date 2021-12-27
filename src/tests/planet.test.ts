import { Planet } from '../models/planet';

const planet = new Planet({ width: 10, height: 10 }, []);

test('planet can add/remove obstacle', () => {
	expect(planet.hasObstacle({ x: 1, y: 1 })).toBe(false);
	planet.insertObstacle({ x: 1, y: 1 });
	expect(planet.hasObstacle({ x: 1, y: 1 })).toBe(true);
	planet.removeObstacle({ x: 1, y: 1 });
	expect(planet.hasObstacle({ x: 1, y: 1 })).toBe(false);
});

test('planet can clear obstacles', () => {
	planet.insertObstacle({ x: 1, y: 1 });
	expect(planet.hasObstacle({ x: 1, y: 1 })).toBe(true);
	planet.clearObstacles();
	expect(planet.hasObstacle({ x: 1, y: 1 })).toBe(false);
});

test('planet can set size', () => {
	expect(planet.getSize()).toStrictEqual({ width: 10, height: 10 });
	planet.setSize({ width: 25, height: 25 });
	expect(planet.getSize()).toStrictEqual({ width: 25, height: 25 });
});
