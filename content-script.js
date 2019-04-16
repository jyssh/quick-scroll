const swiftScroll = () => {
    if (window.scrollY > 0) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    } else {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        })
    }
}

browser.runtime.onMessage.addListener(request => {
    swiftScroll()
    return Promise.resolve({
        scrolled: true
    })
})

