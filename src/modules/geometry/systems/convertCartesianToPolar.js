import {convertRadiansToDegrees} from 'modules/geometry/systems';

export default function convertCartesianToPolar(cartesianCoordinates) {
    const angleInRadians = Math.atan(
        cartesianCoordinates.y / cartesianCoordinates.x
    );
    return {
        magnitude: Math.sin(angleInRadians) * cartesianCoordinates.y,
        angle: convertRadiansToDegrees(angleInRadians),
    };
}
