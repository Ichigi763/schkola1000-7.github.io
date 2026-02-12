const html = document.documentElement;
const toggleButton = document.getElementById('themeToggle');
html.classList.add('js');

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

const revealBlocks = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealBlocks.forEach((block) => observer.observe(block));
} else {
  revealBlocks.forEach((block) => block.classList.add('visible'));
}

const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
];

const calendarGrid = document.getElementById('calendarGrid');
const calendarTitle = document.getElementById('calendarTitle');

if (calendarGrid && calendarTitle) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const holidays = new Set([8, 22]);

  calendarTitle.textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startOffset = (firstDay.getDay() + 6) % 7;

  for (let i = 0; i < startOffset; i += 1) {
    const muted = document.createElement('div');
    muted.className = 'day muted';
    muted.textContent = '';
    calendarGrid.append(muted);
  }

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    const el = document.createElement('div');
    el.className = 'day';
    el.textContent = day;

    if (day === today.getDate()) {
      el.classList.add('today');
    }

    if (holidays.has(day) && month === 2) {
      el.classList.add('holiday');
      el.title = 'Праздничный день';
    }

    calendarGrid.append(el);
  }
}
