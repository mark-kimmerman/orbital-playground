import test from 'tape';
import convertCartesianToPolar from './convertCartesianToPolar';

const cartesianToPolarTests = [
    {
        name: 'Cartesian (0, 0) → Polar (0, 0)',
        cartesianCoordinates: {x: 0, y: 0},
        expectedPolarCoordinates: {angle: 0, magnitude: 0},
    },
    {
        name: 'Cartesian (10, 0) → Polar (10, 0)',
        cartesianCoordinates: {x: 10, y: 0},
        expectedPolarCoordinates: {angle: 0, magnitude: 10},
    },
    {
        name: 'Cartesian (0, 10) → Polar (10, 90)',
        cartesianCoordinates: {x: 0, y: 10},
        expectedPolarCoordinates: {angle: 90, magnitude: 10},
    },
    {
        name: 'Cartesian (-10, 0) → Polar (10, 180)',
        cartesianCoordinates: {x: -10, y: 0},
        expectedPolarCoordinates: {angle: 180, magnitude: 10},
    },
    {
        name: 'Cartesian (0, -10) → Polar (10, 270)',
        cartesianCoordinates: {x: 0, y: -10},
        expectedPolarCoordinates: {angle: 270, magnitude: 10},
    },
    {
        name: 'Cartesian (10, 10) → Polar (sqrt(200), 45)',
        cartesianCoordinates: {x: 10, y: 10},
        expectedPolarCoordinates: {angle: 45, magnitude: Math.sqrt(200)},
    },
];

cartesianToPolarTests.forEach(cartesianToPolarTest =>
    test(cartesianToPolarTest.name, t => {
        const {cartesianCoordinates} = cartesianToPolarTest;

        const polarCoordinates = convertCartesianToPolar(cartesianCoordinates);

        const {expectedPolarCoordinates} = cartesianToPolarTest;
        t.equal(polarCoordinates.magnitude, expectedPolarCoordinates.magnitude);
        t.equal(
            Math.round(polarCoordinates.angle),
            expectedPolarCoordinates.angle
        );
        t.end();
    })
);
