import { Application } from 'express';

export interface RouteInterface {
	addRoutes(basePath: string): void;
}
