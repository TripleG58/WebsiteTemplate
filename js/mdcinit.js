(function(){

    // Shorten document.querySelector
    function dqs(param) {return document.querySelector(param);}
    // Shorten document.querySelectorAll
    function dqsa(param) {return document.querySelectorAll(param);}

    // Attach auto init attributes

    // top app bar 
    for (let elem of dqsa('.mdc-top-app-bar')) {
        elem.setAttribute('data-mdc-auto-init', 'MDCTopAppBar');
    }
    // ripples
    for (let elem of dqsa('.mdc-button, .mdc-fab, .mdc-icon-button')) {
        elem.setAttribute('data-mdc-auto-init', 'MDCRipple');
    }
    // drawers
    for (let elem of dqsa('.mdc-drawer')) {
        elem.setAttribute('data-mdc-auto-init', 'MDCDrawer');
    }

    // MDC Auto Init

    window.mdc.autoInit();

    // Cleanup auto init

    // icon buttons
    for (let elem of dqsa('.mdc-icon-button')) {
        elem.MDCRipple.unbounded = true;
    }
    
})();

