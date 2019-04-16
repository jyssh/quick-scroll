const informTab = (tab) => {
    browser.tabs.sendMessage(tab.id, {scroll: true})
}

browser.pageAction.onClicked.addListener(informTab)
