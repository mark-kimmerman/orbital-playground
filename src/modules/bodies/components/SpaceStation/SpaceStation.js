import {buildSvgElement} from 'modules/svgElements/systems';

const RADIUS_OF_EARTH = 6.38 * Math.pow(10, 6);

export default function SpaceStation(props) {
    const {parentWidth, parentHeight} = props;

    const WIDTH = 60;
    const HEIGHT = 30;

    const x = (parentWidth - WIDTH) / 2;
    const y = 20;

    const node = buildSvgElement('rect', {
        width: WIDTH,
        height: HEIGHT,
        fill: 'orange',
        transform: `translate(${x}, ${y})`,
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
            magnitude: 100,
            magnitude: RADIUS_OF_EARTH, // + 2414016,
        },
    };

    return {
        name: 'Space Station',
        node,
        state,
    };
}
