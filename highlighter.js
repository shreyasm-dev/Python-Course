document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre.code').forEach((block) => {
		block.classList.add('lang-python')
    hljs.highlightBlock(block);
  });
});
