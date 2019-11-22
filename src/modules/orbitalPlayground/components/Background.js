import {buildSvgElement} from 'modules/svgElements/systems';

export default function Background(props) {
    const {width, height} = props;

    const background = buildSvgElement('rect', {
        width: width,
        height: height,
        fill: 'black',
    });

    return background;
}
