/* Fallback stub for environments where the devtools blocker bundle is absent. */
(function () {
    if (typeof window.DisableDevtool !== 'function') {
        window.DisableDevtool = function () {};
    }
})();
