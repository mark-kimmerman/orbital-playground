import {
    convertPolarToCartesian,
    convertCartesianToPolar,
} from 'modules/geometry/systems';

export default function addVectors(firstVector, secondVector) {
    const firstVectorInCartesian = convertPolarToCartesian(firstVector);
    const secondVectorInCartesian = convertPolarToCartesian(secondVector);

    const vectorSumInCartesian = {
        x: firstVectorInCartesian.x + secondVectorInCartesian.x,
        y: firstVectorInCartesian.y + secondVectorInCartesian.y,
    };

    const vectorSumInPolar = convertCartesianToPolar(vectorSumInCartesian);
    return vectorSumInPolar;
}
