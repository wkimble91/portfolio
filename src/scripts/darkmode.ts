const body = document.querySelector('body');

// Dark Mode Action
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.dark-mode-button');

// Enable Dark Mode
const enableDarkMode = () => {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
};

// Disable Dark Mode
const disableDarkMode = () => {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
};

// Toggle based on button position
const nightToggle = document.getElementById('night-toggle') as HTMLInputElement;
if (darkMode == 'enabled') {
  enableDarkMode();
  nightToggle.checked = true;
} else {
  disableDarkMode();
  nightToggle.checked = false;
}

// Button Event Handler
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
