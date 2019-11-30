export default function calculateThrustForcesOnBody(body) {
    if (!body.state.thrusters) {
        return [];
    }
    const forces = [];
    if (body.state.thrusters.isMainThrusterEngaged) {
        forces.push({
            angle: 90 - body.state.rotation.angle,
            magnitude: 100000,
        });
    }
    return forces;
}
