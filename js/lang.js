
function toggleLang() {
  const elements = document.querySelectorAll('[data-it]');
  elements.forEach(el => {
    const current = el.innerText;
    const isItalian = current === el.getAttribute('data-it');
    el.innerText = isItalian ? el.getAttribute('data-en') : el.getAttribute('data-it');
  });
}
