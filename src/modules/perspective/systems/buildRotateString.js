import {getBodyOffsetToCenter} from 'modules/bodies/systems';
import {buildScaleDimensionToDisplay} from 'modules/perspective/systems';

export default function buildRotateString({body, perspective}) {
    const scaleDimensionToDisplay = buildScaleDimensionToDisplay(perspective);
    const offsetToCenter = getBodyOffsetToCenter(body);
    return `rotate(
            ${(body.state.rotation && body.state.rotation.angle) ||
                0} ${scaleDimensionToDisplay(
        offsetToCenter.x
    )} ${scaleDimensionToDisplay(offsetToCenter.y)})`;
}
