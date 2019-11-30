import {buildSvgElement} from 'modules/svgElements/systems';

import {RADIUS_OF_EARTH, MASS_OF_EARTH} from 'modules/bodies/constants';

export default function Earth(props) {
    const dimensions = {
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

    const updateSize = (body, scaleDimensionToDisplay) => {
        const radius = scaleDimensionToDisplay(body.dimensions.radius);
        body.node.setAttribute('r', radius);
    };

    return {
        name: 'Earth',
        dimensions,
        node,
        state,
        updateSize,
    };
}
