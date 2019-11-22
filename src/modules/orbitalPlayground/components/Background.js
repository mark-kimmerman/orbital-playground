export default function Background(props) {
    const {width, height} = props;

    const background = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect'
    );
    background.setAttribute('width', width);
    background.setAttribute('height', height);
    background.setAttribute('fill', 'black');
    return background;
}
