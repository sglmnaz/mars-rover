import { Orientation } from '../types/orientation.type';
import { Coordinates } from './coordinates.interface';

export interface RoverState {
	position: Coordinates;
	heading: Orientation;
}
