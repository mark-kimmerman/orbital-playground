import {buildSvgElement} from 'modules/svgElements/systems';
import {Background} from 'modules/orbitalPlayground/components';
import {SpaceStation} from 'modules/bodies/components';

export default function OrbitalPlayground(props) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = buildSvgElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: `0 0 ${width} ${height}`,
        width: width,
        height: height,
    });

    svg.appendChild(Background({width, height}));
    svg.appendChild(SpaceStation());

    return svg;
}
