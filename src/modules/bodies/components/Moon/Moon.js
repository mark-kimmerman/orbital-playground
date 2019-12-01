import {buildSvgElement} from 'modules/svgElements/systems';

import {
    RADIUS_OF_MOON,
    MASS_OF_MOON,
    MOON_ORBITAL_DISTANCE_FROM_EARTH,
} from 'modules/bodies/constants';

export default function Moon(props) {
    const dimensions = {
        radius: RADIUS_OF_MOON,
    };

    const node = buildSvgElement('circle', {
        r: 0,
        stroke: 'green',
        fill: 'green',
    });

    const state = {
        mass: MASS_OF_MOON,
        acceleration: {
            angle: 0,
            magnitude: 0,
        },
        velocity: {
            angle: 90,
            magnitude: 1.022 * 1000,
        },
        position: {
            angle: 90,
            magnitude: MOON_ORBITAL_DISTANCE_FROM_EARTH,
        },
        timestampOfLastUpdate: Date.now(),
    };

    const updateSize = (body, scaleDimensionToDisplay) => {
        const radius = scaleDimensionToDisplay(body.dimensions.radius);
        body.node.setAttribute('r', radius);
    };

    return {
        name: 'Moon',
        dimensions,
        node,
        state,
        updateSize,
    };
}
