import {
    convertPolarToCartesian,
    convertCartesianToPolar,
} from 'modules/geometry/systems';

export default function applyForcesToBody({body, forces}) {
    body.state.acceleration = {
        magnitude: 0,
        angle: 0,
    };
    return forces.reduce(
        (updatedBody, force) => applyForceToBody({body: updatedBody, force}),
        body
    );
}

function applyForceToBody({body, force}) {
    const bodyAccelerationInCartesian = convertPolarToCartesian(
        body.state.acceleration
    );
    const accelerationChangeInCartesian = convertPolarToCartesian({
        magnitude: force.magnitude / body.state.mass,
        angle: force.angle,
    });

    const updatedBodyAccelerationInCartesian = {
        x: bodyAccelerationInCartesian.x + accelerationChangeInCartesian.x,
        y: bodyAccelerationInCartesian.y + accelerationChangeInCartesian.y,
    };

    body.state.acceleration = convertCartesianToPolar(
        updatedBodyAccelerationInCartesian
    );
    return body;
}
