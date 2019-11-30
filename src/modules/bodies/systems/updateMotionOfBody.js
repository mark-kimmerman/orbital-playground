import {addVectors, scaleVector} from 'modules/geometry/systems';

export default function updateMotionOfBody(body) {
    const bodyWithUpdatedVelocity = updateVelocityOfBody(body);
    const bodyWithUpdatedPosition = updatePositionOfBody(
        bodyWithUpdatedVelocity
    );
    return bodyWithUpdatedPosition;
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
