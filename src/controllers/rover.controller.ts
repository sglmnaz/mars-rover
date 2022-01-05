import { Request, Response, NextFunction } from 'express';
import { Mission } from '../models/mission';
import { Command } from '../types/command.type';

export class RoverController {
	getState(req: Request, res: Response, next: NextFunction) {
		return res.status(200).send(Mission.rover.getState());
	}

	giveCommands(req: Request, res: Response, next: NextFunction) {
		let commands: Command[] = [];
		let message = 'commands completed';

		try {
			commands = req.body.map((command: string) => command.toUpperCase());
			for (const command of commands) {
				switch (command) {
					case 'F':
					case 'B':
						const moved = Mission.rover.move(command);
						if (!moved) message = 'commands stopped, rover encountere an obstacle';
						break;
					case 'L':
					case 'R':
						Mission.rover.rotate(command);
						break;
					default:
						throw 'commands must be one of the following: F,B,R,L';
				}
			}
		} catch (error) {
			return res.status(400).send(error);
		}

		return res.status(200).send({ ...Mission.rover.getState(), message: message });
	}

	resetState(req: Request, res: Response, next: NextFunction) {
		try {
			Mission.rover.setPosition({ x: 0, y: 0 });
			Mission.rover.setHeading('N');
		} catch (error) {
			return res.status(500).send(error);
		}

		return res.status(200).send(Mission.rover.getState());
	}
}
