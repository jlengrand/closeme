const incrementUrl = 'https://us-central1-closeme-1e761.cloudfunctions.net/incrementCounter';

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    console.log('Pop-up closed!');
}

const observer = new MutationObserver((mutationsList, observer) => {
    const buttons = document.querySelectorAll('.js-dismissMeterButton,.button--close');
    if ( buttons != undefined){
        for (let b of buttons) {
            b.click();
            xhr.open('GET', incrementUrl, true);
            xhr.send();
        }
    }
});

observer.observe(
    document.getElementsByClassName('site-main')[0], 
    { attributes: false, childList: true, subtree: true }
);
