import {
    applyForcesToBody,
    calculateGravitationalForcesOnBody,
} from 'modules/bodies/systems';
import {addVectors, scaleVector} from 'modules/geometry/systems';

export default function updateBodies(bodies) {
    return bodies.map(updateBody);
}

function updateBody(body, index, bodies) {
    const otherBodies = filterIndexFromList(index, bodies);
    const forces = calculateGravitationalForcesOnBody({body, otherBodies});

    const bodyWithUpdatedTimeframe = updateTimeframe(body);
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

function updateTimeframe(body) {
    const currentTime = Date.now();
    const secondsSinceLastUpdate =
        (currentTime - body.state.timestampOfLastUpdate) / 1000;
    body.state.timeframeInSeconds = secondsSinceLastUpdate;
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
