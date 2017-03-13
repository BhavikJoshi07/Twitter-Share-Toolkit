var contextLists = ["selection", "link", "image", "page"];

for(i = 0; i < contextLists.length;i++) {

    var context = contextLists[i];
    var titleText = "Twitter Share Toolkit : Tweet this " + context + "!";
    chrome.contextMenus.create({
        title : titleText,
        contexts : [context],
        onclick : contextFunction,
        id : context
    });

}
function contextFunction(data, tab) {

    switch(data.menuItemId) {
        case 'selection' : 
            chrome.windows.create({url : "http://twitter.com/share?text=" + encodeURIComponent(data.selectionText), type : "panel"});
            break;
        case 'link' :
            chrome.windows.create({url : "http://twitter.com/share?url=" + encodeURIComponent(data.linkUrl), type : "panel"});
            break;
        case 'image' :
            chrome.windows.create({url : "http://twitter.com/share?url=" + encodeURIComponent(data.srcUrl), type : "panel"});
            break;
        case 'page' :
            chrome.windows.create({url : "http://twitter.com/share?text=" + encodeURIComponent(tab.title) + "&url=" + encodeURIComponent(data.pageUrl),type : "panel" });
            break;
    }
}