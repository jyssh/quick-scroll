const informTab = (tab) => {
    browser.tabs.sendMessage(tab.id, {scroll: true})
}

// The ideal way to display pageAction icon should be
// in manifest.json, using key
// `"show_matches": ["<all_urls>"]`.
//
// However, as explained vaguely here:
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Differences_between_desktop_and_Android#Effect_on_your_add-on_UI
// >> The features of pageAction are also reduced in Firefox for Android.
// >> The manifest.json key page_action enables you to define the button icon and a popup.
// >> You then have use of pageAction.show() and pageAction.hide() however, once ‘shown’,
// >> note that the address bar button is visible in all tabs
// >> (unlike the desktop behavior, where the button is shown only for a specified tab.)
// >> But you will still be able to hide the pageAction using pageAction.hide()  on a specific tab
// >> (say, for example, you wish to hide your extension's page action icon in about:addons or about:memory tabs)
//
// So, the key `page_action.show_matches` in manifest.json
// has no effect in Firefox Android - my main target platform for this add-on.
// Hence, the need to resort to `pageAction.show()` whenever a tab is activated.
browser.tabs.onActivated.addListener(tabInfo => {
    browser.pageAction.show(tabInfo.tabId)
    /*browser.pageAction
        .isShown({tabId: tabInfo.tabId})
        .then(shown => {
            if (!shown) {
                browser.pageAction.show(tabInfo.tabId)
            }
        })*/
})

browser.pageAction.onClicked.addListener(informTab)
