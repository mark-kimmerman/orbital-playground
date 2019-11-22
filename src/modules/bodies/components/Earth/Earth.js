import {buildSvgElement} from 'modules/svgElements/systems';

export default function Earth(props) {
    const {parentWidth, parentHeight} = props;

    const x = parentWidth / 2;
    const y = parentWidth * 0.8 + parentHeight;

    const earth = buildSvgElement('circle', {
        r: parentWidth,
        stroke: 'cyan',
        fill: 'none',
        mass: 5.972 * Math.pow(10, 24),
        velocity: 0,
        acceleration: 0,
        transform: `translate(${x}, ${y})`,
    });

    return earth;
}
