const storageKey = "popups_closed";
const elementId = "amount";

chrome.storage.sync.get([storageKey], (result) => {
    const value = ((result.popups_closed === undefined) ? 0 : result.popups_closed);
    document.getElementById(elementId).textContent = value;
});