function replaceWords(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(/\b(labour|labor)\b/gi, "lobster");
  } else {
    for (const child of node.childNodes) {
      replaceWords(child);
    }
  }
}

// Initial replacement
replaceWords(document.body);

// Observe future changes (for dynamic timelines)
const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      replaceWords(node);
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
