import {convertDegreesToRadians} from 'modules/geometry/systems';

export default function calculateDistanceBetweenTwoPositions(
    firstPosition,
    secondPosition
) {
    const sumOfSquaredMagnitudes =
        Math.pow(firstPosition.magnitude, 2) +
        Math.pow(secondPosition.magnitude, 2);
    const productOfMagnitudes =
        firstPosition.magnitude * secondPosition.magnitude;
    const firstAngleInRadians = convertDegreesToRadians(firstPosition.angle);
    const secondAngleInRadians = convertDegreesToRadians(secondPosition.angle);
    const cosineOfDifferenceInAngles = Math.cos(
        secondAngleInRadians - firstAngleInRadians
    );

    return Math.sqrt(
        sumOfSquaredMagnitudes -
            2 * productOfMagnitudes * cosineOfDifferenceInAngles
    );
}
