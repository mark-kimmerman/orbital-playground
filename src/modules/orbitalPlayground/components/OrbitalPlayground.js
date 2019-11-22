import {Background} from 'modules/orbitalPlayground/components';
import {SpaceStation} from 'modules/bodies/components';

export default function OrbitalPlayground(props) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    svg.appendChild(Background({width, height}));
    svg.appendChild(SpaceStation());

    return svg;
}
