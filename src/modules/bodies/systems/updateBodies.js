import {
    applyForcesToBody,
    calculateGravitationalForcesOnBody,
} from 'modules/bodies/systems';

export default function updateBodies(bodies) {
    bodies.forEach(updateBody);
}

function updateBody(body, index, bodies) {
    const otherBodies = filterIndexFromList(index, bodies);
    const forces = calculateGravitationalForcesOnBody({body, otherBodies});
    const bodyWithForcesApplied = applyForcesToBody({body, forces});
    console.log(bodyWithForcesApplied.state.acceleration);
}

function filterIndexFromList(index, list) {
    return list.filter((_, indexOfItem) => index !== indexOfItem);
}
