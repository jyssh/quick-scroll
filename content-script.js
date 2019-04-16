const swiftScroll = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

browser.runtime.onMessage.addListener(request => {
    swiftScroll()
    return Promise.resolve({
        scrolled: true
    })
})

