function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleResize = debounce(() => {
  console.log('Resized');
}, 300);
window.addEventListener('resize', handleResize);