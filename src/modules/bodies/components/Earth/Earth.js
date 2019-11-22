import {buildSvgElement} from 'modules/svgElements/systems';

export default function Earth(props) {
    const {parentWidth, parentHeight} = props;

    const earth = buildSvgElement('circle', {
        r: parentWidth,
        cx: parentWidth / 2,
        cy: parentWidth * 0.8 + parentHeight,
        stroke: 'cyan',
        fill: 'none',
        mass: 5.972 * Math.pow(10, 24),
        velocity: 0,
        acceleration: 0,
    });

    return earth;
}
