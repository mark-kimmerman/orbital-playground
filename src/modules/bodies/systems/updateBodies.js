import {calculateGravitationalForcesOnBody} from 'modules/bodies/systems';

export default function updateBodies(startingBodies) {
    startingBodies.forEach((body, index) => {
        calculateGravitationalForcesOnBody({
            body,
            index,
            bodies: startingBodies,
        });
    });
}
