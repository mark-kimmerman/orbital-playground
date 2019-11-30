export default function getBodyOffsetToCenter(body) {
    if (body.dimensions.getOffsetToCenter) {
        return body.dimensions.getOffsetToCenter(body);
    }
    return {
        x: 0,
        y: 0,
    };
}
