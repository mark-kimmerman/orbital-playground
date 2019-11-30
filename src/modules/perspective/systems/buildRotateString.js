import {getBodyOffsetToCenter} from 'modules/bodies/systems';
import {buildScaleDimensionToDisplay} from 'modules/perspective/systems';

export default function buildRotateString({body, perspective}) {
    const rotationAngle = buildRotationAngle(body);
    const pointToRotateAround = buildPointToRotateAround({body, perspective});

    return `rotate(
            ${rotationAngle} ${pointToRotateAround.x} ${pointToRotateAround.y}
            )`;
}

function buildRotationAngle(body) {
    if (!body.state.rotation) {
        return 0;
    }
    return body.state.rotation.angle;
}

function buildPointToRotateAround({body, perspective}) {
    const scaleDimensionToDisplay = buildScaleDimensionToDisplay(perspective);
    const offsetToCenter = getBodyOffsetToCenter(body);
    return {
        x: scaleDimensionToDisplay(offsetToCenter.x),
        y: scaleDimensionToDisplay(offsetToCenter.y),
    };
}
