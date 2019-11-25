import {
    convertPolarToCartesian,
    convertRadiansToDegrees,
} from 'modules/geometry/systems';

export default function calculateAngleBetweenTwoPositions(
    firstPosition,
    secondPosition
) {
    const firstPositionInCartesian = convertPolarToCartesian(firstPosition);
    const secondPositionInCartesian = convertPolarToCartesian(secondPosition);

    const positionFromOriginInCartesian = {
        x: secondPositionInCartesian.x - firstPositionInCartesian.x,
        y: secondPositionInCartesian.y - firstPositionInCartesian.y,
    };

    const {x, y} = positionFromOriginInCartesian;

    const angleInRadians = Math.atan2(y, x);
    const angleInDegrees = convertRadiansToDegrees(angleInRadians);

    if (angleInDegrees >= 0) {
        return angleInDegrees;
    }
    if (angleInDegrees > -0.00001) {
        return 0;
    }
    return 360 + angleInDegrees;
}
