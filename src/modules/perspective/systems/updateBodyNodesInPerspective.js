import {convertDegreesToRadians} from 'modules/geometry/systems';
import {scaleLinear} from 'd3-scale';

export default function updateBodyNodesInPerspective({bodies, perspective}) {
    bodies.forEach(body => updateBodyNodeInPerspective({body, perspective}));
}

function updateBodyNodeInPerspective({body, perspective}) {
    if (body.dimensions.type === 'circle') {
        return updateCircularBodyInPerspective({body, perspective});
    }
    if (body.dimensions.type === 'rectangle') {
        return updateRectangularBodyInPerspective({body, perspective});
    }
}

function updateCircularBodyInPerspective({body, perspective}) {
    const mapViewDimensionToElementDimension = buildDimensionScaleFromPerspective(
        perspective
    );
    const radius = mapViewDimensionToElementDimension(body.dimensions.radius);
    body.node.setAttribute('r', radius);
    translateBodyInPerspective({body, perspective});
}

function buildDimensionScaleFromPerspective(perspective) {
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
            ${centerOfElement.x + offset.x}, ${centerOfElement.y - offset.y}
        )`
    );
}

function buildTranslateBodyInPerspectiveOffset({body, perspective}) {
    const mapViewDimensionToElementDimension = buildDimensionScaleFromPerspective(
        perspective
    );
    const angleInRadians = convertDegreesToRadians(body.state.position.angle);
    return {
        x: mapViewDimensionToElementDimension(
            body.state.position.magnitude * Math.cos(angleInRadians)
        ),
        y: mapViewDimensionToElementDimension(
            body.state.position.magnitude * Math.sin(angleInRadians)
        ),
    };
}

function updateRectangularBodyInPerspective({body, perspective}) {
    const mapViewDimensionToElementDimension = buildDimensionScaleFromPerspective(
        perspective
    );
    const width = mapViewDimensionToElementDimension(body.dimensions.width);
    const height = mapViewDimensionToElementDimension(body.dimensions.height);
    body.node.setAttribute('width', width);
    body.node.setAttribute('height', height);

    translateBodyInPerspective({body, perspective});
}
