import {convertDegreesToRadians} from 'modules/geometry/systems';

export default function convertPolarToCartesian(polarCoordinates) {
    const angleInRadians = convertDegreesToRadians(polarCoordinates.angle);
    return {
        x: Math.cos(angleInRadians) * polarCoordinates.magnitude,
        y: Math.sin(angleInRadians) * polarCoordinates.magnitude,
    };
}
