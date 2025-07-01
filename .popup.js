document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('extractButton');
  
    button.addEventListener('click', () => {
        // Code to extract data or manipulate the DOM goes here
        // For example, sending a message to the content script
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {action: "extractFields"});
        });
    });
});