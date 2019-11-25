import test from 'tape';
import convertPolarToCartesian from './convertPolarToCartesian';

const polarToCartesianTests = [
    {
        name: 'Polar (0, 0) → Cartesian (0, 0)',
        polarCoordinates: {angle: 0, magnitude: 0},
        expectedCartesianCoordinates: {x: 0, y: 0},
    },
    {
        name: 'Polar (0, 90) → Cartesian (0, 0)',
        polarCoordinates: {angle: 90, magnitude: 0},
        expectedCartesianCoordinates: {x: 0, y: 0},
    },
    {
        name: 'Polar (10, 0) → Cartesian (10, 0)',
        polarCoordinates: {angle: 0, magnitude: 10},
        expectedCartesianCoordinates: {x: 10, y: 0},
    },
    {
        name: 'Polar (10, 90) → Cartesian (0, 10)',
        polarCoordinates: {angle: 90, magnitude: 10},
        expectedCartesianCoordinates: {x: 0, y: 10},
    },
    {
        name: 'Polar (10, 180) → Cartesian (-10, 0)',
        polarCoordinates: {angle: 180, magnitude: 10},
        expectedCartesianCoordinates: {x: -10, y: 0},
    },
    {
        name: 'Polar (10, 270) → Cartesian (0, -10)',
        polarCoordinates: {angle: 270, magnitude: 10},
        expectedCartesianCoordinates: {x: 0, y: -10},
    },
    {
        name: 'Polar (sqrt(200), 45) → Cartesian (10, 10)',
        polarCoordinates: {angle: 45, magnitude: Math.sqrt(200)},
        expectedCartesianCoordinates: {x: 10, y: 10},
    },
];

polarToCartesianTests.forEach(polarToCartesianTest =>
    test(polarToCartesianTest.name, t => {
        const {polarCoordinates} = polarToCartesianTest;

        const cartesianCoordinates = convertPolarToCartesian(polarCoordinates);

        const {expectedCartesianCoordinates} = polarToCartesianTest;
        t.equal(
            Math.round(cartesianCoordinates.x),
            expectedCartesianCoordinates.x
        );
        t.equal(
            Math.round(cartesianCoordinates.y),
            expectedCartesianCoordinates.y
        );
        t.end();
    })
);
