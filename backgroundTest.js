
function contextualClickHandler() {
    browser.browserAction.setPopup({"popup": "popup1.html"});
    browser.browserAction.openPopup();
    browser.browserAction.setPopup(null);
}
browser.menus.create({
    id: "MENU1",
    title: "CLICK ME",
    contexts: ["message_list"]
});
browser.menus.onClicked.addListener(contextualClickHandler);

browser.browserAction.onClicked.addListener(()=>{
    console.log("Got the click on browserAction button");
    browser.browserAction.setPopup({"popup": "popup2.html"});
    browser.browserAction.openPopup();
    browser.browserAction.setPopup(null);
});

browser.browserAction.setPopup(null);
