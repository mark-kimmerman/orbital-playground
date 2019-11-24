import {buildSvgElement} from 'modules/svgElements/systems';

const IS_VOLUME_EXAGGERATED = 1;
const VOLUME_EXAGERATION_SCALAR = 10000;

const RADIUS_OF_EARTH = 6378.1 * 1000;
const ONE_MILE_IN_METERS = 1.60934 * 1000;
const LOW_EARTH_ORBIT_MIDPOINT_ALTITUDE = 1090 * ONE_MILE_IN_METERS;
const MEDIUM_EARTH_ORBIT_MIDPOINT_ALTITUDE = 11718 * ONE_MILE_IN_METERS;
const GEOSYNCHRONOUS_ORBIT_ALTITUDE = 22236 * ONE_MILE_IN_METERS;
const HIGH_EARTH_ORBIT_MIDPOINT_ALTITUDE = 35768 * ONE_MILE_IN_METERS;

export default function SpaceStation(props) {
    const {startingPosition} = props;

    const dimensions = {
        type: 'rectangle',
        width: 30 * (IS_VOLUME_EXAGGERATED ? VOLUME_EXAGERATION_SCALAR : 1),
        height: 30 * (IS_VOLUME_EXAGGERATED ? VOLUME_EXAGERATION_SCALAR : 1),
    };

    const node = buildSvgElement('rect', {
        width: 0,
        height: 0,
        fill: 'orange',
    });

    const state = {
        mass: 1000,
        acceleration: {
            angle: 0,
            magnitude: 0,
        },
        velocity: {
            angle: 0,
            magnitude: 0,
        },
        position: {
            angle: 90,
            magnitude: RADIUS_OF_EARTH + LOW_EARTH_ORBIT_MIDPOINT_ALTITUDE,
        },
        timestampOfLastUpdate: Date.now(),
    };

    return {
        name: 'Space Station',
        dimensions,
        node,
        state,
    };
}
