import {
    calculateDistanceBetweenTwoPositions,
    calculateYComponentOfPosition,
    convertRadiansToDegrees,
} from 'modules/geometry/systems';

export default function calculateAngleBetweenTwoPositions(
    firstPosition,
    secondPosition
) {
    const hypotenuse = calculateDistanceBetweenTwoPositions(
        firstPosition,
        secondPosition
    );
    const yComponentOfFirstPosition = calculateYComponentOfPosition(
        firstPosition
    );
    const yComponentOfSecondPosition = calculateYComponentOfPosition(
        secondPosition
    );
    const opposite = yComponentOfSecondPosition - yComponentOfFirstPosition;

    const angleInRadians = Math.asin(opposite / hypotenuse);
    return convertRadiansToDegrees(angleInRadians);
}
