import {
    buildScaleDimensionToDisplay,
    buildTranslateString,
    buildRotateString,
} from 'modules/perspective/systems';

export default function updateBodyNodesInPerspective({bodies, perspective}) {
    bodies.forEach(body => updateBodyNodeInPerspective({body, perspective}));
}

function updateBodyNodeInPerspective({body, perspective}) {
    const scaleDimensionToDisplay = buildScaleDimensionToDisplay(perspective);
    body.updateSize(body, scaleDimensionToDisplay);
    transformBodyInPerspective({body, perspective});
}

function transformBodyInPerspective({body, perspective}) {
    const translateString = buildTranslateString({body, perspective});
    const rotateString = buildRotateString({body, perspective});
    body.node.setAttribute('transform', `${translateString} ${rotateString}`);
}
