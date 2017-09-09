function swapStart() {
    chrome.storage.local.get('settings', (object) => {
        const settings = object.settings;
        if (settings.enable) {
            swapImages('img', settings.imageUrl);
            document.addEventListener('DOMSubtreeModified', () =>
                swapImages('img:not(.source-swapper-class)', settings.imageUrl)
            );
        }
    });
}

function swapImages(selector, imgSource) {
    Array.from(document.querySelectorAll(selector)).forEach((item, index) => swapSrc(item, imgSource));
}

function swapSrc(item, imgSource) {
    item.src = imgSource;
    item.className += ' source-swapper-class';
}

swapStart();

