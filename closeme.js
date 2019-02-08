const incrementUrl = 'https://us-central1-closeme-1e761.cloudfunctions.net/incrementCounter';
const storageKey = "popups_closed";

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    console.log('Pop-up closed!');
}

function updateAnalytics(){
    incrementClosed();
    xhr.open('GET', incrementUrl, true);
    xhr.send();
}

function incrementClosed(){
    chrome.storage.sync.get([storageKey], (result) => {
        console.log(result.popups_closed);
        const value = ((result.popups_closed === undefined) ? 0 : result.popups_closed) + 1;
        chrome.storage.sync.set({popups_closed : value} , () => {
            console.log("value is " + value );
        });
    });
}

const observer = new MutationObserver((mutationsList, observer) => {
    const buttons = document.querySelectorAll('.js-dismissMeterButton,.button--close');
    if ( buttons != undefined){
        for (let b of buttons) {
            b.click();
            updateAnalytics();
        }
    }
});

observer.observe(
    document.getElementsByClassName('site-main')[0], 
    { attributes: false, childList: true, subtree: true }
);