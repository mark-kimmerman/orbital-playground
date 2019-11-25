import test from 'tape';
import calculateAngleBetweenTwoPositions from './calculateAngleBetweenTwoPositions';

const angleBetweenPositionsTests = [
    {
        name: 'angle between (0, 0) and (0, 0) is 0',
        firstPosition: {angle: 0, magnitude: 0},
        secondPosition: {angle: 0, magnitude: 0},
        expectedAngle: 0,
    },
    {
        name: 'angle between (10, 0) and (10, 0) is 0',
        firstPosition: {angle: 0, magnitude: 10},
        secondPosition: {angle: 0, magnitude: 10},
        expectedAngle: 0,
    },
    {
        name: 'angle between (0, 45) and (0, 45) is 0',
        firstPosition: {angle: 45, magnitude: 0},
        secondPosition: {angle: 45, magnitude: 0},
        expectedAngle: 0,
    },
    {
        name: 'angle between (10, 45) and (10, 45) is 0',
        firstPosition: {angle: 45, magnitude: 10},
        secondPosition: {angle: 45, magnitude: 10},
        expectedAngle: 0,
    },
    {
        name: 'angle between (5, 45) and (10, 45) is 0',
        firstPosition: {angle: 45, magnitude: 10},
        secondPosition: {angle: 45, magnitude: 10},
        expectedAngle: 0,
    },
    {
        name: 'angle between (10, 45) and (5, 45) is 225',
        firstPosition: {angle: 45, magnitude: 10},
        secondPosition: {angle: 45, magnitude: 5},
        expectedAngle: 225,
    },
    {
        name: 'angle between (0, 0) and (10, 135) is 135',
        firstPosition: {angle: 0, magnitude: 0},
        secondPosition: {angle: 135, magnitude: 10},
        expectedAngle: 135,
    },
    {
        name: 'angle between (0, 0) and (10, 225) is 225',
        firstPosition: {angle: 0, magnitude: 0},
        secondPosition: {angle: 225, magnitude: 10},
        expectedAngle: 225,
    },
    {
        name: 'angle between (0, 0) and (10, 315) is 315',
        firstPosition: {angle: 0, magnitude: 0},
        secondPosition: {angle: 315, magnitude: 10},
        expectedAngle: 315,
    },
    {
        name: 'angle between (10, 180) and (0, 0) is 0',
        firstPosition: {angle: 180, magnitude: 10},
        secondPosition: {angle: 0, magnitude: 0},
        expectedAngle: 0,
    },
];

angleBetweenPositionsTests.forEach(angleBetweenPositionsTest =>
    test(angleBetweenPositionsTest.name, t => {
        const {firstPosition, secondPosition} = angleBetweenPositionsTest;

        const angle = calculateAngleBetweenTwoPositions(
            firstPosition,
            secondPosition
        );

        const {expectedAngle} = angleBetweenPositionsTest;
        t.equal(angle, expectedAngle);
        t.end();
    })
);
