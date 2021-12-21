import { Request, Response, NextFunction } from 'express';
import { Mission } from '../models/mission';
import { Command } from '../types/command.type';

export class RoverController {
	getState(req: Request, res: Response, next: NextFunction) {
		return res.status(200).send(Mission.printStatus());
	}

	giveCommands(req: Request, res: Response, next: NextFunction) {
		let commands: Command[] = [];

		try {
			commands = req.body;

			for (const command of commands) {
				switch (command) {
					case 'F':
					case 'B':
						const error = Mission.rover.move(command);
						if (error) return res.status(200).send(error);
						break;
					case 'L':
					case 'R':
						Mission.rover.rotate(command);
						break;
					default:
						return res.status(400).send(error);
				}
			}
		} catch (error) {
			return res.status(400).send(error);
		}

		return res.status(200).send(Mission.printStatus());
	}
}
