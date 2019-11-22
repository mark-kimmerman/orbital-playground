import {buildSvgElement} from 'modules/svgElements/systems';

export default function SpaceStation(props) {
    const {parentWidth, parentHeight} = props;

    const WIDTH = 60;
    const HEIGHT = 30;

    const x = (parentWidth - WIDTH) / 2;
    const y = 20;

    const spaceStation = buildSvgElement('rect', {
        width: WIDTH,
        height: HEIGHT,
        fill: 'orange',
        mass: 1000,
        velocity: 0,
        acceleration: 0,
        transform: `translate(${x}, ${y})`,
    });

    return spaceStation;
}
