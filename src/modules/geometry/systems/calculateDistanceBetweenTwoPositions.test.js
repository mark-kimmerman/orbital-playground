import test from 'tape';
import calculateDistanceBetweenTwoPositions from './calculateDistanceBetweenTwoPositions';

const distanceTests = [
    {
        name: 'Distance between (0, 0) and (0, 0) is 0',
        firstPosition: {angle: 0, magnitude: 0},
        secondPosition: {angle: 0, magnitude: 0},
        expectedDistance: 0,
    },
    {
        name: 'Distance between (0, 0) and (10, 0) is 10',
        firstPosition: {angle: 0, magnitude: 0},
        secondPosition: {angle: 0, magnitude: 10},
        expectedDistance: 10,
    },
    {
        name: 'Distance between (10, 0) and (0, 0) is 10',
        firstPosition: {angle: 0, magnitude: 10},
        secondPosition: {angle: 0, magnitude: 0},
        expectedDistance: 10,
    },
];

distanceTests.forEach(distanceTest =>
    test(distanceTest.name, t => {
        const {firstPosition, secondPosition} = distanceTest;

        const distance = calculateDistanceBetweenTwoPositions(
            firstPosition,
            secondPosition
        );

        const {expectedDistance} = distanceTest;
        t.equal(distance, expectedDistance);
        t.end();
    })
);
