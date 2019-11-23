import {convertDegreesToRadians} from 'modules/geometry/systems';

export default function calculateYComponentOfPosition(position) {
    return (
        position.magnitude * Math.sin(convertDegreesToRadians(position.angle))
    );
}
