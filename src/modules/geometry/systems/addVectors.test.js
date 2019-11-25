import addVectors from './addVectors';
import test from 'tape';

const vectorSumTests = [
    {
        name: 'adding two null vectors results in a null vector',
        firstVector: {angle: 0, magnitude: 0},
        secondVector: {angle: 0, magnitude: 0},
        expectedSum: {angle: 0, magnitude: 0},
    },
    {
        name: 'adding a vector and a null vector results in the vector',
        firstVector: {angle: 45, magnitude: 10},
        secondVector: {angle: 0, magnitude: 0},
        expectedSum: {angle: 45, magnitude: 10},
    },
    {
        name: 'adding a null vector and a vector results in the vector',
        firstVector: {angle: 0, magnitude: 0},
        secondVector: {angle: 45, magnitude: 10},
        expectedSum: {angle: 45, magnitude: 10},
    },
    {
        name: 'adding two vectors results in their sum',
        firstVector: {angle: 45, magnitude: 10},
        secondVector: {angle: 135, magnitude: 10},
        expectedSum: {angle: 90, magnitude: 14.142135623730951},
    },
];

vectorSumTests.forEach(vectorSumTest =>
    test(vectorSumTest.name, t => {
        const {firstVector, secondVector} = vectorSumTest;

        const sumOfVectors = addVectors(firstVector, secondVector);

        const {expectedSum} = vectorSumTest;
        t.equal(sumOfVectors.angle, expectedSum.angle);
        t.equal(sumOfVectors.magnitude, expectedSum.magnitude);
        t.end();
    })
);
