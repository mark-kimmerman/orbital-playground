import {
    calculateGravitationalForcesOnBody,
    calculateThrustForcesOnBody,
} from 'modules/bodies/systems';

export default function calculateForcesOnBody({body, otherBodies}) {
    const gravitationalForces = calculateGravitationalForcesOnBody({
        body,
        otherBodies,
    });
    const thrustForces = calculateThrustForcesOnBody(body);
    return [].concat(gravitationalForces).concat(thrustForces);
}
