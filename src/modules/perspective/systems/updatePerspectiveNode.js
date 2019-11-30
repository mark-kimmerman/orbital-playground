export default function updatePerspectiveNode(perspective) {
    perspective.node.setAttribute('transform', buildRotateString(perspective));
}

function buildRotateString(perspective) {
    const viewAngle = perspective.view.position.angle;
    const pointToRotateAround = buildPointToRotateAround(perspective);
    return `rotate(
        ${viewAngle} 
        ${pointToRotateAround.x} 
        ${pointToRotateAround.y}
    )`;
}

function buildPointToRotateAround(perspective) {
    return {
        x: perspective.element.width / 2,
        y: perspective.element.height / 2,
    };
}
