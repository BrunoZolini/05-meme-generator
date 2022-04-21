const inputText = document.querySelector('#text-input');
const inputFile = document.querySelector('#meme-insert');
// const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');

inputText.addEventListener('keyup', () => {
  const texto = inputText.value;
  memeText.innerText = texto;
});

inputFile.addEventListener('change', (event) => {
  const file = event.target.files[0];
  memeImage.src = URL.createObjectURL(file);
  // memeContainer.appendChild(memeImage);
});
