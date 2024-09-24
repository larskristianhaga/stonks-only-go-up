// Function to replace the sell button
function replaceSellFundButton() {

    const sellLink = document.querySelector('a[href*="sell"]');

    if (sellLink) {
        const span = document.createElement('span');

        // If the button has a parent div, then it's a bigger button
        // So we need to add some more CSS for it to look good.
        if (sellLink.parentElement.tagName === 'DIV') {
            sellLink.parentElement.style.display = 'flex';
            sellLink.parentElement.style.justifyContent = 'center';
            sellLink.parentElement.style.alignItems = 'center';
            span.style.fontSize = '2rem';
        }

        span.textContent = '💎👐';
        span.style.cursor = 'not-allowed';

        // Add something to on hover
        span.setAttribute('title', 'We do not support paper hands people. 💎👐');

        sellLink.replaceWith(span);
    } else {
        console.log("Sell link was not found.");
    }
}

// Function to observe DOM changes
function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                replaceSellFundButton();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

// Run the function when the window is fully loaded
window.addEventListener('load', () => {
    replaceSellFundButton();
    observeDOMChanges();
});
