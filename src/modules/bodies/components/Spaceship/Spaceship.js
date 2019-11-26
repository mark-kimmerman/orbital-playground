import {buildSvgElement} from 'modules/svgElements/systems';
import {
    RADIUS_OF_EARTH,
    LOW_EARTH_ORBIT_MIDPOINT_ALTITUDE as ALTITUDE,
    IS_VOLUME_EXAGGERATED,
    VOLUME_EXAGERATION_SCALAR,
} from 'modules/bodies/constants';

export default function Spaceship(props) {
    const dimensions = {
        width: 50 * (IS_VOLUME_EXAGGERATED ? VOLUME_EXAGERATION_SCALAR : 1),
        height: 100 * (IS_VOLUME_EXAGGERATED ? VOLUME_EXAGERATION_SCALAR : 1),
        getOffsetToCenter: body => ({
            x: body.dimensions.width / 2,
            y: body.dimensions.height / 2,
        }),
    };

    const node = buildSvgElement('polygon', {
        points: '',
        fill: 'yellow',
    });

    const state = {
        mass: 10000,
        acceleration: {
            angle: 0,
            magnitude: 0,
        },
        velocity: {
            angle: 105,
            magnitude: 7200,
        },
        position: {
            angle: 15,
            magnitude: RADIUS_OF_EARTH + ALTITUDE,
        },
        timestampOfLastUpdate: Date.now(),
    };

    const updateSize = (body, scaleToDisplay) => {
        const width = scaleToDisplay(body.dimensions.width);
        const height = scaleToDisplay(body.dimensions.height);
        const points = buildPointsFromWidthAndHeight(width, height);
        const pointsString = points
            .map(point => `${point.x},${point.y}`)
            .join(' ');
        body.node.setAttribute('points', pointsString);
    };

    function buildPointsFromWidthAndHeight(width, height) {
        const points = [{x: 0.5, y: 0.0}, {x: 0.0, y: 1.0}, {x: 1.0, y: 1.0}];
        return points.map(point => ({
            x: point.x * width,
            y: point.y * height,
        }));
    }

    return {
        name: 'Spaceship',
        dimensions,
        node,
        state,
        updateSize,
    };
}
