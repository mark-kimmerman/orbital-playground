import {addVectors} from 'modules/geometry/systems';

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
    body.state.acceleration = addVectors(body.state.acceleration, {
        magnitude: force.magnitude / body.state.mass,
        angle: force.angle,
    });
    return body;
}
