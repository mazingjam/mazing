document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'You are on the list!';
  button.disabled = true;
});
