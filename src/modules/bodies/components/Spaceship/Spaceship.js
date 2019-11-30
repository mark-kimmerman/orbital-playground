import {buildSvgElement} from 'modules/svgElements/systems';
import {
    RADIUS_OF_EARTH,
    LOW_EARTH_ORBIT_MIDPOINT_ALTITUDE as ALTITUDE,
    IS_VOLUME_EXAGGERATED,
    VOLUME_EXAGERATION_SCALAR,
} from 'modules/bodies/constants';

export default function Spaceship(props) {
    const spaceship = {
        name: 'Spaceship',
        dimensions: buildDimensions(),
        state: buildState(),
        node: buildNode(),
        updateSize: buildUpdateSize(),
    };
    spaceship.keyEventHandlers = buildKeyEventHandlers(spaceship);
    return spaceship;
}

function buildDimensions() {
    return {
        width: 50 * (IS_VOLUME_EXAGGERATED ? VOLUME_EXAGERATION_SCALAR : 1),
        height: 100 * (IS_VOLUME_EXAGGERATED ? VOLUME_EXAGERATION_SCALAR : 1),
        getOffsetToCenter: body => ({
            x: body.dimensions.width / 2,
            y: body.dimensions.height / 2,
        }),
    };
}

function buildState() {
    return {
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
            angularVelocity: -0.1,
            angle: 0,
        },
        thrusters: {
            isLeftThrusterEngaged: false,
            isRightThrusterEngaged: false,
            isMainThrusterEngaged: false,
        },
        timestampOfLastUpdate: Date.now(),
    };
}

function buildNode() {
    return buildSvgElement('polygon', {
        points: '',
        fill: 'yellow',
    });
}

function buildUpdateSize() {
    return (body, scaleDimensionToDisplay) => {
        const width = scaleDimensionToDisplay(body.dimensions.width);
        const height = scaleDimensionToDisplay(body.dimensions.height);
        const points = buildPointsFromWidthAndHeight(width, height);
        const pointsString = points
            .map(point => `${point.x},${point.y}`)
            .join(' ');
        body.node.setAttribute('points', pointsString);
    };
}

function buildPointsFromWidthAndHeight(width, height) {
    const points = [{x: 0.5, y: 0.0}, {x: 0.0, y: 1.0}, {x: 1.0, y: 1.0}];
    return points.map(point => ({
        x: point.x * width,
        y: point.y * height,
    }));
}

function buildKeyEventHandlers(spaceship) {
    return [
        {
            key: 'a',
            down: () =>
                (spaceship.state.thrusters.isLeftThrusterEngaged = true),
            up: () => (spaceship.state.thrusters.isLeftThrusterEngaged = false),
        },
        {
            key: 'd',
            down: () =>
                (spaceship.state.thrusters.isRightThrusterEngaged = true),
            up: () =>
                (spaceship.state.thrusters.isRightThrusterEngaged = false),
        },
        {
            key: 'w',
            down: () =>
                (spaceship.state.thrusters.isMainThrusterEngaged = true),
            up: () => (spaceship.state.thrusters.isMainThrusterEngaged = false),
        },
    ];
}
