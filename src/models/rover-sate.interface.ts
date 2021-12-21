import { Coordinats } from './coordinates.interface';

export interface RoverState {
	coordinates: Coordinats;
	heading: 'N' | 'E' | 'S' | 'W';
}
