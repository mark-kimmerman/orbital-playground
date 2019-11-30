export default function initializeKeyListeners(keyListenerTargets) {
    const keyEventHandlers = getKeyEventHandlersFromListenerTargets(
        keyListenerTargets
    );
    const mapOfKeysToKeydownAndKeyupHandlers = buildMapOfKeysToKeydownAndKeyupHandlers(
        keyEventHandlers
    );

    window.addEventListener('keydown', event => {
        const key = event.key;
        const handlers = getDownHandlersForKey({
            mapOfKeysToKeydownAndKeyupHandlers,
            key,
        });
        handlers.forEach(handle => handle(event));
    });

    window.addEventListener('keyup', event => {
        const key = event.key;
        const handlers = getUpHandlersForKey({
            mapOfKeysToKeydownAndKeyupHandlers,
            key,
        });
        handlers.forEach(handle => handle(event));
    });
}

function getKeyEventHandlersFromListenerTargets(keyListenerTargets) {
    const keyListenerTargetsWithHandlers = keyListenerTargets.filter(
        target => target.keyEventHandlers
    );
    return keyListenerTargetsWithHandlers.reduce(
        (allHandlers, target) => allHandlers.concat(target.keyEventHandlers),
        []
    );
}

function buildMapOfKeysToKeydownAndKeyupHandlers(keyEventHandlers) {
    const keyToHandlersMap = {};
    keyEventHandlers.forEach(keyHandler => {
        const key = keyHandler.key;
        if (!keyToHandlersMap[key]) {
            keyToHandlersMap[key] = {
                up: [],
                down: [],
            };
        }
        keyToHandlersMap[key].up = keyToHandlersMap[key].up.concat(
            keyHandler.up || []
        );
        keyToHandlersMap[key].down = keyToHandlersMap[key].down.concat(
            keyHandler.down || []
        );
    });
    return keyToHandlersMap;
}

function getDownHandlersForKey({mapOfKeysToKeydownAndKeyupHandlers, key}) {
    if (!mapOfKeysToKeydownAndKeyupHandlers[key]) {
        return [];
    }
    return mapOfKeysToKeydownAndKeyupHandlers[key].down;
}

function getUpHandlersForKey({mapOfKeysToKeydownAndKeyupHandlers, key}) {
    if (!mapOfKeysToKeydownAndKeyupHandlers[key]) {
        return [];
    }
    return mapOfKeysToKeydownAndKeyupHandlers[key].up;
}
