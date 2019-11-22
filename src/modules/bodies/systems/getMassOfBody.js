export default function getMassOfBody(body) {
    const massAttribute = body.getAttribute('mass');
    return parseFloat(massAttribute);
}
