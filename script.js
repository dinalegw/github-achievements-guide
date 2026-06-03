document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('a.button');
  buttons.forEach(button => button.addEventListener('focus', () => button.style.outline = '3px solid rgba(14,165,233,0.5)'));
});
