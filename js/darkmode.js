/* Body */
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

if (darkMode == 'enabled') {
    enableDarkMode();
}

// Desktop Button
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

//Ensure the button is inside the footer tag, and it will be linked to this function.
darkModeToggleFooter.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
