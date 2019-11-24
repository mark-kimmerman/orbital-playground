import {buildSvgElement} from 'modules/svgElements/systems';
import {updateBodies} from 'modules/bodies/systems';
import {Background} from 'modules/orbitalPlayground/components';
import {Earth, SpaceStation} from 'modules/bodies/components';
import {updateBodyNodesInPerspective} from 'modules/perspective/systems';

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

    const earth = Earth({startingPosition: {distance: 0, angle: 0}});
    const spaceStation = SpaceStation({
        startingPosition: {distance: 100, angle: 0},
    });

    const bodies = [earth, spaceStation];
    bodies.forEach(body => svg.appendChild(body.node));

    const viewRadius = spaceStation.state.position.magnitude * 1.2;
    const perspective = {
        element: {width, height},
        view: {
            position: {distance: 0, angle: 0},
            radius: viewRadius,
        },
    };

    setInterval(() => {
        window.bodies = updateBodies(bodies);
        updateBodyNodesInPerspective({bodies, perspective});
    }, 100);

    return svg;
}
