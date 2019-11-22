export default function buildSvgElement(tag, attributes = {}) {
    const svgElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        tag
    );

    Object.keys(attributes).forEach(attribute =>
        svgElement.setAttribute(attribute, attributes[attribute])
    );

    return svgElement;
}
