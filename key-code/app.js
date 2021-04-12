const getKeyCode = (e) => {
  let keyCodeHolder = document.getElementById('key-code');
  keyCodeHolder.textContent = e.keyCode;
};

window.addEventListener('keypress', getKeyCode);
