const observer = new MutationObserver((mutationsList, observer) => {
    const buttons = document.getElementsByClassName("js-dismissMeterButton");
    if ( buttons != undefined){
        for (let b of buttons) {
            b.click(); console.log("closing annoying pop up");
        }
    }
    // else console.log("Nothing found");
});

observer.observe(
    document.getElementsByClassName('site-main')[0], 
    { attributes: false, childList: true, subtree: true }
);
