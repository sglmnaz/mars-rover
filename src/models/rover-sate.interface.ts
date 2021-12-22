import { Orientation } from '../types/orientation.type';
import { Coordinats } from './coordinates.interface';

export interface RoverState {
	coordinates: Coordinats;
	heading: Orientation;
}
