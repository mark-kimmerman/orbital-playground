import {
    applyForcesToBody,
    calculateGravitationalForcesOnBody,
} from 'modules/bodies/systems';
import {addVectors, scaleVector} from 'modules/geometry/systems';

export default function updateBodies({bodies, timeScalar}) {
    return bodies.map((body, indexOfBody) =>
        updateBody({body, indexOfBody, bodies, timeScalar})
    );
}

function updateBody({body, indexOfBody, bodies, timeScalar}) {
    const otherBodies = filterIndexFromList(indexOfBody, bodies);
    const forces = calculateGravitationalForcesOnBody({body, otherBodies});

    const bodyWithUpdatedTimeframe = updateTimeframe(body, timeScalar);
    const bodyWithUpdatedAcceleration = applyForcesToBody({
        body: bodyWithUpdatedTimeframe,
        forces,
    });
    const bodyWithUpdatedVelocity = updateVelocityOfBody(
        bodyWithUpdatedAcceleration
    );
    const bodyWithUpdatedPosition = updatePositionOfBody(
        bodyWithUpdatedVelocity
    );

    return bodyWithUpdatedPosition;
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

function updateVelocityOfBody(body) {
    body.state.velocity = addVectors(
        body.state.velocity,
        scaleVector(body.state.acceleration, body.state.timeframeInSeconds)
    );
    return body;
}

function updatePositionOfBody(body) {
    body.state.position = addVectors(
        body.state.position,
        scaleVector(body.state.velocity, body.state.timeframeInSeconds)
    );
    return body;
}
