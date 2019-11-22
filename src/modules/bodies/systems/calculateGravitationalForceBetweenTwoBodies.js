import {
    getDistanceBetweenTwoBodies,
    getMassOfBody,
} from 'modules/bodies/systems';

const G = 6.67 * Math.pow(10, -11);

export default function calculateGravitationalForceBetweenTwoBodies(
    firstBody,
    secondBody
) {
    const firstBodyMass = getMassOfBody(firstBody);
    const secondBodyMass = getMassOfBody(secondBody);
    const distanceBetweenBodies = getDistanceBetweenTwoBodies(
        firstBody,
        secondBody
    );
    return (
        (G * firstBodyMass * secondBodyMass) /
        Math.pow(distanceBetweenBodies, 2)
    );
}
