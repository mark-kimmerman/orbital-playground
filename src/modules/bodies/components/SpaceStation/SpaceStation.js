import {buildSvgElement} from 'modules/svgElements/systems';
import {
    RADIUS_OF_EARTH,
    LOW_EARTH_ORBIT_MIDPOINT_ALTITUDE as ALTITUDE,
    IS_VOLUME_EXAGGERATED,
    VOLUME_EXAGERATION_SCALAR,
} from 'modules/bodies/constants';

export default function SpaceStation(props) {
    const dimensions = {
        width: 109 * (IS_VOLUME_EXAGGERATED ? VOLUME_EXAGERATION_SCALAR : 1),
        height: 51 * (IS_VOLUME_EXAGGERATED ? VOLUME_EXAGERATION_SCALAR : 1),
        getOffsetToCenter: body => ({
            x: body.dimensions.width / 2,
            y: body.dimensions.height / 2,
        }),
    };

    const node = buildSvgElement('rect', {
        width: 0,
        height: 0,
        fill: 'orange',
    });

    const state = {
        mass: 419725,
        acceleration: {
            angle: 0,
            magnitude: 0,
        },
        velocity: {
            angle: 90,
            magnitude: 7000,
        },
        position: {
            angle: 0,
            magnitude: RADIUS_OF_EARTH + ALTITUDE,
        },
        timestampOfLastUpdate: Date.now(),
    };

    const updateSize = (body, scaleDimensionToDisplay) => {
        const width = scaleDimensionToDisplay(body.dimensions.width);
        const height = scaleDimensionToDisplay(body.dimensions.height);
        body.node.setAttribute('width', width);
        body.node.setAttribute('height', height);
    };

    return {
        name: 'Space Station',
        dimensions,
        node,
        state,
        updateSize,
    };
}
