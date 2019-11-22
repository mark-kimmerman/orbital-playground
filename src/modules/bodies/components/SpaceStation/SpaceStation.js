export default function SpaceStation(props) {
    const spaceStation = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect'
    );

    spaceStation.setAttribute('width', 60);
    spaceStation.setAttribute('height', 30);
    spaceStation.setAttribute('fill', 'orange');

    return spaceStation;
}
