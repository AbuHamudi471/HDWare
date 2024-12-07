// Dark Mode Toggle
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.textContent = "Switch to Dark Mode";
        localStorage.setItem('theme', 'light'); // Save theme preference
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.textContent = "Switch to Light Mode";
        localStorage.setItem('theme', 'dark'); // Save theme preference
    }
});

// Set initial theme based on user's preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = "Switch to Light Mode";
} else {
    body.classList.add('light-mode');
    toggleButton.textContent = "Switch to Dark Mode";
}
