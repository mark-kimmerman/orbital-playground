# Orbital Playground

## Running it locally

```bash
npm start
```

## To do

-   [ ] Render the thrusters when they are firing
-   [ ] Fix the "game clock" so the timeframe for each body is equal (integrals? rename timeScalar)
-   [ ] Toggle between camera views (track a body, whole view)
-   [ ] Add collision detection
-   [ ] Convert to Typescript

# Done

-   [x] Render an SVG to the screen.
-   [x] Render an object in the SVG that changes with clock ticks.
-   [x] Calculate gravitational forces on an object
-   [x] Store body position, velocity, and acceleration as vectors
-   [x] Use position to calculate gravitational force vectors
-   [x] Use forces to update acceleration to update velocity to update position
-   [x] Use perspective to keep everything in view
-   [x] Set actual values for Earth's radius & spacestation orbit height
-   [x] Control the speed of time
-   [x] Make the space station orbit
-   [x] Make sure the bodies are centered around their center
-   [x] Add in a spaceship
-   [x] Add front and side thrusters to the spaceship
-   [x] Add rotation to bodies
