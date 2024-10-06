// Function to replace the sell button
function replaceSellFundButton() {
    const stocksPageSellLink = document.querySelector('a[href*="order/sell"]');
    if (stocksPageSellLink) {
        replaceSellLink(stocksPageSellLink);
    }

    const accountPageSellLink = document.querySelector('[data-testid="sell-fund-button"]');
    if (accountPageSellLink) {
        replaceSellLink(accountPageSellLink);
    }

    const watchlistPageSellLink = document.querySelector('a[href*="ordersidepanel=%2Fsell"]');
    if (watchlistPageSellLink) {
        replaceSellLink(watchlistPageSellLink);
    }
}

function replaceSellLink(link) {
    const span = document.createElement('span');

    span.textContent = '💎👐';
    span.style.cursor = 'not-allowed';
    span.setAttribute('title', 'We do not support paper hands people. 💎👐');

    // If the parent element is a div, then center the emoji
    if (link.parentElement.tagName === 'DIV') {
        link.parentElement.style.display = 'flex';
        link.parentElement.style.justifyContent = 'center';
        link.parentElement.style.alignItems = 'center';
        span.style.fontSize = '2rem';
    }

    link.replaceWith(span);
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
