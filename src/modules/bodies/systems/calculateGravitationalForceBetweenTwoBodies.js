import {getMassOfBody} from 'modules/bodies/systems';
import {
    calculateDistanceBetweenTwoPositions,
    calculateAngleBetweenTwoPositions,
} from 'modules/geometry/systems';

const G = 6.67 * Math.pow(10, -11);

export default function calculateGravitationalForceBetweenTwoBodies(
    firstBody,
    secondBody
) {
    const magnitude = calculateMagnitudeOfGravitationalForce(
        firstBody,
        secondBody
    );

    const angle = calculateAngleBetweenTwoPositions(
        firstBody.state.position,
        secondBody.state.position
    );

    return {
        magnitude,
        angle,
    };
}

function calculateMagnitudeOfGravitationalForce(firstBody, secondBody) {
    const firstBodyMass = getMassOfBody(firstBody);
    const secondBodyMass = getMassOfBody(secondBody);
    const distanceBetweenBodies = calculateDistanceBetweenTwoPositions(
        firstBody.state.position,
        secondBody.state.position
    );
    return (
        (G * firstBodyMass * secondBodyMass) /
        Math.pow(distanceBetweenBodies, 2)
    );
}
