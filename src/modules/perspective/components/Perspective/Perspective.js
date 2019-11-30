import {buildSvgElement} from 'modules/svgElements/systems';

export default function Perspective(props) {
    const {element, view} = props;
    const node = buildNode();

    return {
        element,
        view,
        node,
    };
}

function buildNode() {
    return buildSvgElement('g');
}
