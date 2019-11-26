import {convertDegreesToRadians} from 'modules/geometry/systems';
import {scaleLinear} from 'd3-scale';

export default function updateBodyNodesInPerspective({bodies, perspective}) {
    bodies.forEach(body => updateBodyNodeInPerspective({body, perspective}));
}

function updateBodyNodeInPerspective({body, perspective}) {
    const scaleToDisplay = buildScaleToDisplay(perspective);
    body.updateSize(body, scaleToDisplay);
    translateBodyInPerspective({body, perspective});
}

function buildScaleToDisplay(perspective) {
    const lesserOfElementWidthAndHeight = getLesserOfPerspectiveElementWidthOrHeight(
        perspective
    );
    return scaleLinear()
        .domain([0, perspective.view.radius])
        .range([0, lesserOfElementWidthAndHeight / 2]);
}

function getLesserOfPerspectiveElementWidthOrHeight(perspective) {
    if (perspective.element.width < perspective.element.height) {
        return perspective.element.width;
    }
    return perspective.element.height;
}

function translateBodyInPerspective({body, perspective}) {
    const centerOfElement = {
        x: perspective.element.width / 2,
        y: perspective.element.height / 2,
    };
    const offset = buildTranslateBodyInPerspectiveOffset({body, perspective});
    body.node.setAttribute(
        'transform',
        `translate(
            ${centerOfElement.x + offset.x},
            ${centerOfElement.y - offset.y}
        )`
    );
}

function buildTranslateBodyInPerspectiveOffset({body, perspective}) {
    const mapViewDimensionToElementDimension = buildScaleToDisplay(perspective);
    const angleInRadians = convertDegreesToRadians(body.state.position.angle);
    const offsetToCenter = getBodyOffsetToCenter(body);
    return {
        x: mapViewDimensionToElementDimension(
            body.state.position.magnitude * Math.cos(angleInRadians) -
                offsetToCenter.x
        ),
        y: mapViewDimensionToElementDimension(
            body.state.position.magnitude * Math.sin(angleInRadians) +
                offsetToCenter.y
        ),
    };
}

function getBodyOffsetToCenter(body) {
    if (body.dimensions.getOffsetToCenter) {
        return body.dimensions.getOffsetToCenter(body);
    }
    return {
        x: 0,
        y: 0,
    };
}
