# Roadblocks

- My plan was to change icon to 'scroll-down' when the webpage is at top, and to 'scroll-up' when the webpage is at end. But, `pageAction.setIcon()` is [not supported in Firefox for Android](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/setIcon#Browser_compatibility). So, there goes my dream.

- The pageAction icon moves to a dropdown in text form. I thought that `pageAction.setTitle()` API may be able to change that text ('Scroll Up', 'Scroll Down'). But again it is [not supported in Firefox for Android](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/setTitle#Browser_compatibility).


# Credits

- <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
