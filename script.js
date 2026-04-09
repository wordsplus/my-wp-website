console.log("Website loaded!");

const actionButton = document.getElementById('actionButton');
const message = document.getElementById('message');

if (actionButton && message) {
  actionButton.addEventListener('click', () => {
    message.classList.remove('hidden');
    actionButton.textContent = 'Clicked!';
  });
}
