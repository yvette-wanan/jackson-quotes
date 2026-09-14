(() => {
  const bind = () => {
    const start = document.querySelector('#start');
    const fortune = document.querySelector('#fortune');
    if (!start || !fortune) return;
    start.addEventListener('click', (event) => {
      event.preventDefault();
      const targetY = window.scrollY + fortune.getBoundingClientRect().top - 52;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      window.location.hash = 'fortune';
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();
