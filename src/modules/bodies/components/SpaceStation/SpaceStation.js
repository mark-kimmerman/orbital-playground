import {buildSvgElement} from 'modules/svgElements/systems';

export default function SpaceStation(props) {
    const {parentWidth, parentHeight} = props;

    const WIDTH = 60;
    const HEIGHT = 30;

    const spaceStation = buildSvgElement('rect', {
        width: WIDTH,
        height: HEIGHT,
        fill: 'orange',
        x: (parentWidth - WIDTH) / 2,
        y: 20,
        mass: 1000,
        velocity: 0,
        acceleration: 0,
    });

    return spaceStation;
}
