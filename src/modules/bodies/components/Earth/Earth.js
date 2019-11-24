import {buildSvgElement} from 'modules/svgElements/systems';

const RADIUS_OF_EARTH = 6378.1 * 1000;
const MASS_OF_EARTH = 5.972 * Math.pow(10, 24);

export default function Earth(props) {
    const {startingPosition} = props;

    const dimensions = {
        type: 'circle',
        radius: RADIUS_OF_EARTH,
    };

    const node = buildSvgElement('circle', {
        r: 0,
        stroke: 'cyan',
        fill: 'none',
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
        timestampOfLastUpdate: Date.now(),
    };

    return {
        name: 'Earth',
        dimensions,
        node,
        state,
    };
}
