const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

inputText.addEventListener('keyup', () => {
  const texto = inputText.value;
  memeText.innerText = texto;
});
