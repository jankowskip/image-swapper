window.onload = () => {
    document.imageUrl = document.getElementById('imageUrl');
    document.enable = document.getElementById('radio');
    document.swapImage = document.getElementById('image');

    chrome.storage.local.get('settings', (object) =>
        updateHtmlData(object.settings.imageUrl, object.settings.enable));

    document.getElementById('save').addEventListener('click', saveSettings);
};

function updateHtmlData(imageUrl, enable) {
    document.imageUrl.value = imageUrl;
    document.swapImage.src = imageUrl;
    document.enable.checked = enable;
}

function saveSettings() {
    const imageUrl = document.imageUrl.value;
    const enable = document.enable.checked;

    updateHtmlData(imageUrl, enable);

    const settings = {
        "imageUrl": imageUrl,
        "enable": enable
    };
    chrome.storage.local.set({'settings': settings});
}