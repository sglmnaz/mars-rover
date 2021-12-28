# Mars Rover

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

## Requirements
- You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
- The rover receives a character array of commands.
- Implement commands that move the rover forward/backward (f,b).
- Implement commands that turn the rover left/right (l,r).
- Implement wrapping from one edge of the grid to another. (planets are spheres after all)
- Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

## Prerequisites
- Node must be installed on the machine ( I'm using node v14.17.0 )

## Setup
1. run `npm i`
2. run `npm run build`
3. run `npm run start`

## Testing
run `npm run test`

## Endpoints

##### for more in-depth api documentation you can import the file "mars-rover.postman_collection.json" into postman to automatically generate a collection.

### Rover
- GET localhost:PORT/rover
  - returns the current state of the rover.
- GET localhost:PORT/rover/reset
  - reset rover position to (0,0) and heading to 'N'.
- POST localhost:PORT/rover
  - takes an array of commands in the request body ex: ["F","R","F","L","B"], the commands will be executed by the rover and then the  new state will be returned. If the rover encounters an obstacle it will stop executing commands and an error message will be returned.

### Planet
- GET localhost:PORT/planet/size
  - returns the size of the planet.
- POST localhost:PORT/planet/size
  - takes a Size { width: number, height : number} in the request body and sets the planet's size to the new size.
- GET localhost:PORT/planet/obstacles
  - returns the list of all obstacles.
- POST localhost:PORT/planet/obstacles
  - takes a position { x: number, y : number} in the request body and adds an obtacle to the planet in that position.
- POST localhost:PORT/planet/obstacles/randomize/COUNT
  - takes COUNT (number) as parameter and generates COUNT obstacles in random positions on the planet.
- DELETE localhost:PORT/planet/obstacles
  - takes a position { x: number, y : number} in the request body and removes an obtacle from the planet in that position.
