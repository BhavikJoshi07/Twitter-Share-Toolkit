chrome.contextMenus.create({
    title : "Twitter Share Toolkit",
    contexts : ["selection"],
    onclick : contextFunction
});
function contextFunction(selectedText) {
    chrome.tabs.create({url : "http://twitter.com/share?text="+selectedText.selectionText});
}