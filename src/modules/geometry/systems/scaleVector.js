export default function scaleVector(vector, scalar) {
    return {
        magnitude: vector.magnitude * scalar,
        angle: vector.angle,
    };
}
