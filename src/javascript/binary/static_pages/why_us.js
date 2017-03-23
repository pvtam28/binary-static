const Scroll = require('../common_functions/scroll');
const Client = require('../base/client');

const WhyUs = (function() {
    const onLoad = function() {
        Scroll.sidebar_scroll($('.why-us'));
        Client.activateByClientType();
    };

    const onUnload = function() {
        Scroll.offScroll();
    };

    return {
        onLoad  : onLoad,
        onUnload: onUnload,
    };
})();

module.exports = WhyUs;
