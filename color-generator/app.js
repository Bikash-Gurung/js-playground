const generateRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const handleGenerateButtonClick = () => {
  let color = generateRandomColor();
  main.style.backgroundColor = color;
  colorCode.innerText = color;
};

window.onload = (e) => {
  handleGenerateButtonClick();
};

let main = document.getElementById('main');
let colorCode = document.getElementById('color-code');
let generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', handleGenerateButtonClick);
