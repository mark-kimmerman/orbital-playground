import {buildSvgElement} from 'modules/svgElements/systems';

const MASS_OF_EARTH = 5.972 * Math.pow(10, 24);

export default function Earth(props) {
    const {parentWidth, parentHeight, startingPosition} = props;

    const x = parentWidth / 2;
    const y = parentWidth * 0.8 + parentHeight;

    const node = buildSvgElement('circle', {
        r: parentWidth,
        stroke: 'cyan',
        fill: 'none',
        transform: `translate(${x}, ${y})`,
    });

    const state = {
        mass: MASS_OF_EARTH,
        acceleration: {
            angle: 0,
            magnitude: 0,
        },
        velocity: {
            angle: 0,
            magnitude: 0,
        },
        position: {
            angle: 0,
            magnitude: 0,
        },
    };

    return {
        name: 'Earth',
        node,
        state,
    };
}
