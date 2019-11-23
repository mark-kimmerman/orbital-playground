import {calculateGravitationalForceBetweenTwoBodies} from 'modules/bodies/systems';

const DAMPEN_ACCELERATION_BELOW_THIS_THRESHOLD_TO_0 = 0.00001;

export default function calculateGravitationalForcesOnBody({
    body,
    otherBodies,
}) {
    return otherBodies.map(otherBody =>
        calculateGravitationalForceBetweenTwoBodies(body, otherBody)
    );
}
