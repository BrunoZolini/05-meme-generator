const inputText = document.querySelector('#text-input');
const inputFile = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const elementsButtons = document.querySelector('#elements-buttons');

inputText.addEventListener('keyup', () => {
  const texto = inputText.value;
  memeText.innerText = texto;
});

inputFile.addEventListener('change', (event) => {
  const file = event.target.files[0];
  memeImage.src = URL.createObjectURL(file);
  // memeContainer.appendChild(memeImage);
});

elementsButtons.addEventListener('click', (event) => {
  const buttonSelected = event.target.id;
  if (buttonSelected === 'fire') memeContainer.style.border = '3px dashed red';
  if (buttonSelected === 'water') memeContainer.style.border = '5px double blue';
  if (buttonSelected === 'earth') memeContainer.style.border = '6px groove green';
});
