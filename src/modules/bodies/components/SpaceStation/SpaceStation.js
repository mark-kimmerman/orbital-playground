import {buildSvgElement} from 'modules/svgElements/systems';

export default function SpaceStation(props) {
    const spaceStation = buildSvgElement('rect', {
        width: 60,
        height: 30,
        fill: 'orange',
    });

    return spaceStation;
}
