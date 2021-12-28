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
			commands = req.body.map((command: string) => command.toUpperCase());

			for (const command of commands) {
				switch (command) {
					case 'F':
					case 'B':
						const moveResult = Mission.rover.move(command);
						if (moveResult.message) return res.status(200).send(moveResult.message);
						break;
					case 'L':
					case 'R':
						Mission.rover.rotate(command);
						break;
					default:
						return res.status(400).send('commands must be one of the following: F,B,R,L');
				}
			}
		} catch (error) {
			return res.status(400).send(error);
		}

		return res.status(200).send(Mission.printStatus());
	}

	resetState(req: Request, res: Response, next: NextFunction) {
		try {
			Mission.rover.setPosition({ x: 0, y: 0 });
			Mission.rover.setHeading('N');
		} catch (error) {
			return res.status(500).send(error);
		}

		return res.status(200).send(Mission.printStatus());
	}
}
