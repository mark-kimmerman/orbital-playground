export default function updateRotationOfBody(body) {
    if (!body.state.rotation) {
        return body;
    }
    const bodyWithUpdatedAngularAcceleration = updateAngularAccelerationOfBody(
        body
    );
    const bodyWithUpdatedAngularVelocity = updateAngularVelocityOfBody(
        bodyWithUpdatedAngularAcceleration
    );
    const bodyWithUpdatedAngleOfRotation = updateAngleOfRotationOfBody(
        bodyWithUpdatedAngularVelocity
    );
    return bodyWithUpdatedAngleOfRotation;
}

function updateAngularAccelerationOfBody(body) {
    const acceleration = 0.01;
    if (body.state.thrusters && body.state.thrusters.isLeftThrusterEngaged) {
        body.state.rotation.angularAcceleration = -1 * acceleration;
        return body;
    }
    if (body.state.thrusters && body.state.thrusters.isRightThrusterEngaged) {
        body.state.rotation.angularAcceleration = acceleration;
        return body;
    }
    body.state.rotation.angularAcceleration = 0;
    return body;
}

function updateAngularVelocityOfBody(body) {
    body.state.rotation.angularVelocity =
        body.state.rotation.angularVelocity +
        body.state.rotation.angularAcceleration;
    return body;
}

function updateAngleOfRotationOfBody(body) {
    body.state.rotation.angle =
        body.state.rotation.angle + body.state.rotation.angularVelocity;
    if (body.state.rotation.angle < 0) {
        body.state.rotation.angle = 360 + (body.state.rotation.angle % 360);
    }
    if (body.state.rotation.angle > 360) {
        body.state.rotation.angle = body.state.rotation.angle % 360;
    }
    return body;
}
