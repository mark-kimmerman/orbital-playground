import {scaleLinear} from 'd3-scale';

export default function buildScaleDimensionToDisplay(perspective) {
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
