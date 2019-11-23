import {buildSvgElement} from 'modules/svgElements/systems';
import {updateBodies} from 'modules/bodies/systems';
import {Background} from 'modules/orbitalPlayground/components';
import {Earth, SpaceStation} from 'modules/bodies/components';

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

    const bodies = [
        Earth({
            parentWidth: width,
            parentHeight: height,
            startingPosition: {
                distance: 0,
                angle: 0,
            },
        }),
        SpaceStation({
            parentWidth: width,
            parentHeight: height,
            startingPosition: {
                distance: 100,
                angle: 0,
            },
        }),
    ];

    window.bodies = bodies;

    bodies.forEach(body => svg.appendChild(body.node));

    setInterval(() => {
        updateBodies(bodies);
    }, 100);

    return svg;
}
