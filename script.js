const html = document.documentElement;
const toggleButton = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.dataset.theme = savedTheme;
}

const setToggleLabel = () => {
  const darkMode = html.dataset.theme === 'dark';
  toggleButton.innerHTML = darkMode
    ? '<i class="ti ti-moon"></i><span>Тёмная тема</span>'
    : '<i class="ti ti-sun-high"></i><span>Светлая тема</span>';
};

setToggleLabel();

toggleButton.addEventListener('click', () => {
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', html.dataset.theme);
  setToggleLabel();
});
