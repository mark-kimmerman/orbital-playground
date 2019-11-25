import {convertRadiansToDegrees} from 'modules/geometry/systems';

export default function convertCartesianToPolar(cartesianCoordinates) {
    const magnitude = calculateMagnitude(cartesianCoordinates);
    const angleInRadians = calculateAngle({cartesianCoordinates, magnitude});

    return {
        magnitude,
        angle: convertRadiansToDegrees(angleInRadians),
    };
}

function calculateMagnitude(cartesianCoordinates) {
    const {x, y} = cartesianCoordinates;
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function calculateAngle({cartesianCoordinates, magnitude}) {
    const {x, y} = cartesianCoordinates;
    if (y >= 0 && magnitude !== 0) {
        return Math.acos(x / magnitude);
    }
    if (y < 0) {
        return 2 * Math.PI - Math.acos(x / magnitude);
    }
    return 0;
}
