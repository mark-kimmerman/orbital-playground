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
            angle: 75,
            magnitude: 7200,
        },
        position: {
            angle: 345,
            magnitude: RADIUS_OF_EARTH + ALTITUDE,
        },
        rotation: {
            angularAcceleration: 0,
            angularVelocity: -0.03,
            angle: 0,
        },
        thrusters: {
            isLeftThrusterEngaged: false,
            isRightThrusterEngaged: false,
            isMainThrusterEngaged: false,
        },
        timestampOfLastUpdate: Date.now(),
    };

    const updateSize = (body, scaleDimensionToDisplay) => {
        const width = scaleDimensionToDisplay(body.dimensions.width);
        const height = scaleDimensionToDisplay(body.dimensions.height);
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

    const keyEventHandlers = [
        {
            key: 'a',
            down: () => (state.thrusters.isLeftThrusterEngaged = true),
            up: () => (state.thrusters.isLeftThrusterEngaged = false),
        },
        {
            key: 'd',
            down: () => (state.thrusters.isRightThrusterEngaged = true),
            up: () => (state.thrusters.isRightThrusterEngaged = false),
        },
        {
            key: 'w',
            down: () => (state.thrusters.isMainThrusterEngaged = true),
            up: () => (state.thrusters.isMainThrusterEngaged = false),
        },
    ];

    return {
        name: 'Spaceship',
        dimensions,
        node,
        state,
        keyEventHandlers,
        updateSize,
    };
}
