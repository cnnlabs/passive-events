function createPassiveEvents() {
    var i = 0,
        eventListenerTypes = [
            'mousewheel',
            'touchcancel',
            'touchdrag',
            'touchend',
            'touchstart'
        ],
        opts = null,
        testEvents = null,
        supportsEventListenerOptions = false,
        attachType = '';

    try {
        // Check to see if the browser can create new Events this way.
        testEvents = new Event('test');

        // Check to see if the browser supports Event Listener options.
        opts = Object.defineProperty({}, 'passive', {
            get: function () {
                supportsEventListenerOptions = true;
            }
        });

        if (window.addEventListener) {
            window.addEventListener('test', null, opts);
            attachType = 'addEventListener';
        } else {
            window.attachEvent('test', null, opts);
            attachType = 'attachEvent';
        }
    } catch (e) {}

    if (supportsEventListenerOptions) {
        for (; i < eventListenerTypes.length; i++) {
            convertEvent(eventListenerTypes[i]);
        }
    }

    function convertEvent(eventListenerType) {
        window[attachType](eventListenerType, function () {
        }, {passive: true});
    }
}

if (window.addEventListener) {
    window.addEventListener('load', createPassiveEvents);
} else {
    window.attachEvent('onload', createPassiveEvents);
}
