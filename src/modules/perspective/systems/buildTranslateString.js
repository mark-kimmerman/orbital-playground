import {getBodyOffsetToCenter} from 'modules/bodies/systems';
import {convertDegreesToRadians} from 'modules/geometry/systems';
import {buildScaleDimensionToDisplay} from 'modules/perspective/systems';

export default function buildTranslateString({body, perspective}) {
    const offset = buildTranslateBodyInPerspectiveOffset({body, perspective});
    const centerOfElement = {
        x: perspective.element.width / 2,
        y: perspective.element.height / 2,
    };
    return `translate(
        ${centerOfElement.x + offset.x},
        ${centerOfElement.y - offset.y}
    )`;
}

function buildTranslateBodyInPerspectiveOffset({body, perspective}) {
    const scaleDimensionToDisplay = buildScaleDimensionToDisplay(perspective);
    const angleInRadians = convertDegreesToRadians(body.state.position.angle);
    const offsetToCenter = getBodyOffsetToCenter(body);
    return {
        x: scaleDimensionToDisplay(
            body.state.position.magnitude * Math.cos(angleInRadians) -
                offsetToCenter.x
        ),
        y: scaleDimensionToDisplay(
            body.state.position.magnitude * Math.sin(angleInRadians) +
                offsetToCenter.y
        ),
    };
}
