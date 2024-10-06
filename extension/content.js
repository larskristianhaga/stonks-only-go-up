// Function to replace the sell button
function replaceSellFundButton() {

    const stocksPageSellLink = document.querySelector('a[href*="order/sell"]');

    if (stocksPageSellLink) {
        const span = document.createElement('span');

        // If the button has a parent div, then it's a bigger button
        // So we need to add some more CSS for it to look good.
        if (stocksPageSellLink.parentElement.tagName === 'DIV') {
            stocksPageSellLink.parentElement.style.display = 'flex';
            stocksPageSellLink.parentElement.style.justifyContent = 'center';
            stocksPageSellLink.parentElement.style.alignItems = 'center';
            span.style.fontSize = '2rem';
        }

        span.textContent = '💎👐';
        span.style.cursor = 'not-allowed';

        // Add something to on hover
        span.setAttribute('title', 'We do not support paper hands people. 💎👐');

        stocksPageSellLink.replaceWith(span);
    }

    const accountPageSellLink = document.querySelector('[data-testid="sell-fund-button"]');

    if (accountPageSellLink) {
        const span = document.createElement('span');

        span.textContent = '💎👐';
        span.style.cursor = 'not-allowed';

        // Add something to on hover
        span.setAttribute('title', 'We do not support paper hands people. 💎👐');

        accountPageSellLink.replaceWith(span);
    }

    const watchlistPageSellLink = document.querySelector('a[href*="ordersidepanel=%2Fsell"]');

    if (watchlistPageSellLink) {
        const span = document.createElement('span');

        span.textContent = '💎👐';
        span.style.cursor = 'not-allowed';

        // Add something to on hover
        span.setAttribute('title', 'We do not support paper hands people. 💎👐');

        watchlistPageSellLink.replaceWith(span);
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
