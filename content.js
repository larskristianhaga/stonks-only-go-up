// Function to replace the sell button
function replaceSellFundButton() {

  const element = document.querySelector('[data-testid="sell-fund-button"]');

  if (element) {
    const span = document.createElement('span');
    span.textContent = '💎👐';
    element.replaceWith(span);
  } else {
    console.log("Button was not found.");
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
  // console.log("Window fully loaded.");
  replaceSellFundButton();
  observeDOMChanges();
});
