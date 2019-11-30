import {
    applyForcesToBody,
    calculateForcesOnBody,
    updateMotionOfBody,
    updateRotationOfBody,
} from 'modules/bodies/systems';
import {addVectors, scaleVector} from 'modules/geometry/systems';

export default function updateBodies({bodies, timeScalar}) {
    return bodies.map((body, indexOfBody) =>
        updateBody({body, indexOfBody, bodies, timeScalar})
    );
}

function updateBody({body, indexOfBody, bodies, timeScalar}) {
    const otherBodies = filterIndexFromList(indexOfBody, bodies);
    const forces = calculateForcesOnBody({body, otherBodies});

    const bodyWithUpdatedTimeframe = updateTimeframe(body, timeScalar);
    const bodyWithUpdatedAcceleration = applyForcesToBody({
        body: bodyWithUpdatedTimeframe,
        forces,
    });
    const bodyWithUpdatedMotion = updateMotionOfBody(
        bodyWithUpdatedAcceleration
    );
    const bodyWithUpdatedRotation = updateRotationOfBody(bodyWithUpdatedMotion);

    return bodyWithUpdatedRotation;
}

function updateTimeframe(body, timeScalar = 1) {
    const currentTime = Date.now();
    const secondsSinceLastUpdate =
        (currentTime - body.state.timestampOfLastUpdate) / 1000;
    body.state.timeframeInSeconds = secondsSinceLastUpdate * timeScalar;
    body.state.timestampOfLastUpdate = currentTime;
    return body;
}

function filterIndexFromList(index, list) {
    return list.filter((_, indexOfItem) => index !== indexOfItem);
}
