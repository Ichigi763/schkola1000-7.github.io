diff --git a/script.js b/script.js
index b89f4d63cbb78fcf056fe49ae598da0650326c20..8c2630a5b75f3160a8edb49f762a06d221626ba0 100644
--- a/script.js
+++ b/script.js
@@ -1,668 +1,144 @@
-/* базовые */
-:root{
-  --bg: #f6f8ff;
-  --card: rgba(255,255,255,.72);
-  --text: #101425;
-  --muted: rgba(16,20,37,.65);
-  --line: rgba(16,20,37,.10);
-  --shadow: 0 18px 50px rgba(16,20,37,.10);
-
-  --brand: #4e7cff;
-  --brand2:#7c5cff;
-
-  --radius: 18px;
-  --max: 1120px;
-}
-
-html{
-  scroll-behavior: smooth;
-}
-
-[data-theme="dark"]{
-  --bg: #0b1220;
-  --card: rgba(255,255,255,.06);
-  --text: #eaf0ff;
-  --muted: rgba(234,240,255,.65);
-  --line: rgba(255,255,255,.12);
-  --shadow: 0 18px 60px rgba(0,0,0,.35);
-  --brand: #5dd6ff;
-  --brand2:#8b5cff;
-}
-
-*{ box-sizing: border-box; }
-body{
-  margin:0;
-  font-family: "Manrope", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
-  color: var(--text);
-  background:
-    radial-gradient(1000px 600px at 10% 10%, rgba(78,124,255,.14), transparent 55%),
-    radial-gradient(900px 550px at 90% 20%, rgba(124,92,255,.12), transparent 50%),
-    var(--bg);
-}
-
-/* контейнер */
-.container{
-  max-width: var(--max);
-  margin: 0 auto;
-  padding: 0 18px;
-}
-
-.section{
-  padding: 46px 0;
-}
-
-.section-head{
-  margin-bottom: 16px;
-}
-.section-head h2{
-  margin: 0;
-  font-size: 24px;
-  display:flex;
-  gap:10px;
-  align-items:center;
-}
-.sub{
-  margin: 6px 0 0;
-  color: var(--muted);
-  line-height: 1.5;
-}
-
-.row-between{
-  display:flex;
-  justify-content: space-between;
-  align-items: center;
-  gap: 14px;
-  flex-wrap: wrap;
-}
-
-/* header */
-.hero{
-  padding: 18px 0 36px;
-}
-
-.nav{
-  display:flex;
-  align-items:center;
-  justify-content: space-between;
-  gap: 16px;
-  padding: 10px 0 16px;
-  position: sticky;
-  top: 0;
-  z-index: 30;
-  background: color-mix(in srgb, var(--bg) 75%, transparent);
-  backdrop-filter: blur(10px);
-  border-bottom: 1px solid var(--line);
-}
-
-.logo-wrap{
-  display:flex;
-  align-items:center;
-  gap: 10px;
-  font-weight: 800;
-}
-.logo-icon{
-  font-size: 22px;
-  color: var(--brand);
-}
-.logo-text{
-  letter-spacing: .2px;
-}
-
-.nav-links{
-  display:flex;
-  gap: 12px;
-  flex-wrap: wrap;
-  align-items:center;
-}
-.nav-links a{
-  color: var(--muted);
-  text-decoration:none;
-  padding: 8px 10px;
-  border-radius: 12px;
-  border: 1px solid transparent;
-}
-.nav-links a:hover{
-  color: var(--text);
-  background: rgba(255,255,255,.06);
-  border-color: var(--line);
-}
-
-.theme-toggle{
-  display:flex;
-  gap: 10px;
-  align-items:center;
-  border: 1px solid var(--line);
-  background: var(--card);
-  color: var(--text);
-  padding: 10px 12px;
-  border-radius: 14px;
-  cursor:pointer;
-  box-shadow: var(--shadow);
-}
-.theme-toggle i{ font-size: 18px; }
-
-/* hero content */
-.hero-content{
-  display:grid;
-  grid-template-columns: 1.05fr .95fr;
-  gap: 22px;
-  align-items: center;
-  padding-top: 18px;
-}
-
-.badge{
-  display:inline-flex;
-  align-items:center;
-  gap: 8px;
-  padding: 8px 12px;
-  border-radius: 999px;
-  background: var(--card);
-  border: 1px solid var(--line);
-  color: var(--muted);
-  box-shadow: var(--shadow);
-  margin: 0 0 12px;
-}
-
-.hero h1{
-  margin: 0;
-  font-size: clamp(28px, 3.2vw, 44px);
-  line-height: 1.12;
-}
-.lead{
-  margin: 12px 0 0;
-  font-size: 16px;
-  color: var(--muted);
-  line-height: 1.6;
-}
-
-.hero-actions{
-  display:flex;
-  gap: 10px;
-  flex-wrap: wrap;
-  margin-top: 16px;
-}
-
-.primary-btn, .ghost-btn{
-  display:inline-flex;
-  align-items:center;
-  justify-content:center;
-  gap: 8px;
-  text-decoration:none;
-  font-weight: 800;
-  padding: 12px 14px;
-  border-radius: 14px;
-  border: 1px solid var(--line);
-  transition: transform .18s ease, filter .18s ease;
-  cursor:pointer;
-}
-.primary-btn{
-  color: #07101f;
-  border: none;
-  background: linear-gradient(135deg, var(--brand), var(--brand2));
-  box-shadow: 0 14px 40px rgba(78,124,255,.25);
-}
-.ghost-btn{
-  background: var(--card);
-  color: var(--text);
-  box-shadow: var(--shadow);
-}
-.primary-btn:hover, .ghost-btn:hover{ transform: translateY(-1px); filter: brightness(1.03); }
-.primary-btn.small, .ghost-btn.small{ padding: 10px 12px; font-weight: 800; }
-
-.mini-stats{
-  display:grid;
-  grid-template-columns: repeat(3, 1fr);
-  gap: 10px;
-  margin-top: 18px;
-}
-.mini-stat{
-  border: 1px solid var(--line);
-  background: var(--card);
-  border-radius: 16px;
-  padding: 12px;
-  box-shadow: var(--shadow);
-}
-.mini-stat b{ display:block; font-size: 18px; }
-.mini-stat span{ color: var(--muted); font-size: 12px; }
-
-.hero-media{ position: relative; }
-.hero-image{
-  width:100%;
-  height: 420px;
-  object-fit: cover;
-  border-radius: 22px;
-  border: 1px solid var(--line);
-  box-shadow: var(--shadow);
-}
-.hero-float{
-  position:absolute;
-  right: 14px;
-  bottom: 14px;
-  width: min(320px, 86%);
-  padding: 14px;
-}
-.hero-float-row{
-  display:flex;
-  gap: 12px;
-  align-items:center;
-  padding: 10px;
-  border-radius: 14px;
-  border: 1px solid var(--line);
-  background: rgba(255,255,255,.06);
-  margin-top: 10px;
-}
-.hero-float-row:first-child{ margin-top: 0; }
-.hero-float-row i{
-  font-size: 20px;
-  color: var(--brand);
-}
-.hero-float-row b{ display:block; }
-.hero-float-row span{ color: var(--muted); font-size: 12px; }
-
-/* cards */
-.card{
-  border-radius: var(--radius);
-  background: var(--card);
-  border: 1px solid var(--line);
-  box-shadow: var(--shadow);
-}
-
-/* расписание */
-.schedule-grid{
-  display:grid;
-  grid-template-columns: repeat(3, 1fr);
-  gap: 14px;
-}
-.schedule-card{
-  padding: 16px;
-}
-.schedule-card h3{
-  margin: 0 0 12px;
-}
-.schedule-card ul{
-  list-style:none;
-  padding:0;
-  margin:0;
-  display:grid;
-  gap: 10px;
-}
-.schedule-card li{
-  display:flex;
-  gap: 12px;
-  align-items:center;
-  padding: 10px 10px;
-  border-radius: 14px;
-  border: 1px solid var(--line);
-  background: rgba(255,255,255,.05);
-}
-.schedule-card li span{
-  font-weight: 800;
-  color: var(--brand);
-}
-
-/* slider */
-.slider-controls{ display:flex; gap: 8px; }
-.icon-btn{
-  width: 42px;
-  height: 42px;
-  border-radius: 14px;
-  border: 1px solid var(--line);
-  background: var(--card);
-  color: var(--text);
-  box-shadow: var(--shadow);
-  cursor:pointer;
-  transition: transform .18s ease;
-}
-.icon-btn:hover{ transform: translateY(-1px); }
-
-.slider{
-  display:flex;
-  gap: 14px;
-  overflow:auto;
-  padding: 6px 2px 10px;
-  scroll-snap-type: x mandatory;
-  scroll-behavior: smooth;
-}
-.slider::-webkit-scrollbar{ height: 10px; }
-.slider::-webkit-scrollbar-thumb{
-  background: color-mix(in srgb, var(--text) 14%, transparent);
-  border-radius: 999px;
-}
-.teacher-card{
-  scroll-snap-align: start;
-  min-width: 320px;
-  max-width: 340px;
-  overflow:hidden;
-}
-.teacher-card img{
-  width:100%;
-  height: 190px;
-  object-fit: cover;
-  display:block;
-}
-.teacher-card .pad{
-  padding: 14px;
-}
-.teacher-card h3{ margin: 0 0 6px; }
-.subject{ color: var(--muted); margin: 0 0 10px; font-weight: 700; }
-.teacher-meta{
-  display:flex;
-  gap: 8px;
-  flex-wrap: wrap;
-  margin-top: 12px;
-}
-.pill{
-  display:inline-flex;
-  align-items:center;
-  gap: 8px;
-  padding: 8px 10px;
-  border-radius: 999px;
-  border: 1px solid var(--line);
-  background: rgba(255,255,255,.05);
-  color: var(--muted);
-  font-size: 12px;
-  font-weight: 800;
-}
-.pill i{ font-size: 16px; color: var(--brand); }
-
-/* stats */
-.stats-grid{
-  display:grid;
-  grid-template-columns: repeat(3, 1fr);
-  gap: 14px;
-}
-.stat-card{
-  padding: 16px;
-}
-.stat-top{
-  display:flex;
-  align-items:center;
-  gap: 10px;
-  color: var(--muted);
-  font-weight: 800;
-}
-.stat-top i{ color: var(--brand); font-size: 20px; }
-.stat-number{
-  font-size: 44px;
-  font-weight: 800;
-  margin-top: 10px;
-}
-.muted{ color: var(--muted); line-height:1.6; margin: 8px 0 0; }
-.tiny{ font-size: 12px; }
-
-.progress-grid{
-  display:grid;
-  grid-template-columns: repeat(3, 1fr);
-  gap: 14px;
-  margin-top: 14px;
-}
-.progress-card{ padding: 16px; }
-.progress-head{
-  display:flex;
-  justify-content: space-between;
-  align-items:center;
-  gap: 10px;
-}
-.progress{
-  height: 12px;
-  border-radius: 999px;
-  border: 1px solid var(--line);
-  background: rgba(255,255,255,.05);
-  overflow:hidden;
-  margin-top: 12px;
-}
-.bar{
-  height: 100%;
-  width: 0%;
-  background: linear-gradient(135deg, var(--brand), var(--brand2));
-  transition: width 1s ease;
-}
-.bar.ready{ width: calc(var(--v) * 1%); }
-
-/* alumni */
-.alumni-grid{
-  display:grid;
-  grid-template-columns: repeat(3, 1fr);
-  gap: 14px;
-}
-.alumni-card{
-  padding: 16px;
-}
-.alumni-top{
-  display:flex;
-  gap: 12px;
-  align-items:center;
-}
-.alumni-top img{
-  width: 62px;
-  height: 62px;
-  border-radius: 16px;
-  object-fit: cover;
-  border: 1px solid var(--line);
-}
-.tags{ display:flex; gap:8px; flex-wrap:wrap; margin-top: 12px; }
-.tag{
-  display:inline-flex;
-  align-items:center;
-  gap: 8px;
-  padding: 8px 10px;
-  border-radius: 999px;
-  border: 1px solid var(--line);
-  background: rgba(255,255,255,.05);
-  color: var(--muted);
-  font-size: 12px;
-  font-weight: 800;
-}
-.tag i{ color: var(--brand); }
-
-/* features (кружки) */
-.feature-grid{
-  display:grid;
-  grid-template-columns: repeat(3, 1fr);
-  gap: 14px;
-}
-.feature-card{
-  padding: 16px;
-}
-.feature-card i{
-  font-size: 24px;
-  color: var(--brand);
-}
-.feature-card h3{ margin: 10px 0 6px; }
-.feature-card p{ margin: 0; color: var(--muted); line-height:1.6; }
-
-/* gallery */
-.gallery-grid{
-  display:grid;
-  grid-template-columns: repeat(4, 1fr);
-  gap: 12px;
-}
-.gallery-item{
-  border-radius: 18px;
-  overflow:hidden;
-  border: 1px solid var(--line);
-  background: rgba(255,255,255,.05);
-  cursor:pointer;
-  position: relative;
-  aspect-ratio: 4 / 3;
-}
-.gallery-item img{
-  width:100%;
-  height:100%;
-  object-fit: cover;
-  display:block;
-  transition: transform .25s ease;
-}
-.gallery-item:hover img{ transform: scale(1.03); }
-.gallery-item .cap{
-  position:absolute;
-  inset:auto 10px 10px 10px;
-  padding: 8px 10px;
-  border-radius: 14px;
-  background: color-mix(in srgb, var(--bg) 70%, transparent);
-  border: 1px solid var(--line);
-  color: var(--text);
-  font-size: 12px;
-  font-weight: 800;
-  backdrop-filter: blur(8px);
-}
-
-/* contacts */
-.contacts-grid{
-  display:grid;
-  grid-template-columns: 1fr 1fr 1fr;
-  gap: 14px;
-}
-.contact-card{ padding: 16px; }
-.contact-card.map{ overflow:hidden; }
-.row{ display:flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
-.form{
-  display:grid;
-  gap: 10px;
-}
-label{
-  display:grid;
-  gap: 6px;
-  font-weight: 800;
-}
-input, textarea{
-  font: inherit;
-  border-radius: 14px;
-  padding: 10px 12px;
-  border: 1px solid var(--line);
-  background: rgba(255,255,255,.05);
-  color: var(--text);
-  outline:none;
-}
-input:focus, textarea:focus{
-  border-color: color-mix(in srgb, var(--brand) 55%, var(--line));
-}
-.map-box{ border-radius: 16px; overflow:hidden; border: 1px solid var(--line); }
-.map-placeholder{
-  height: 270px;
-  display:grid;
-  place-items:center;
-  color: var(--muted);
-  background: rgba(255,255,255,.05);
-}
-
-/* faq */
-.faq{ display:grid; gap: 12px; }
-details.card{
-  padding: 14px 16px;
-}
-summary{
-  cursor:pointer;
-  font-weight: 800;
-  list-style: none;
-}
-summary::-webkit-details-marker{ display:none; }
-.faq-body{
-  margin-top: 10px;
-  color: var(--muted);
-  line-height: 1.6;
-}
-
-/* footer */
-.footer{
-  border-top: 1px solid var(--line);
-  padding: 18px 0;
-  color: var(--muted);
-}
-.footer-content{
-  display:flex;
-  justify-content: space-between;
-  align-items:center;
-  gap: 14px;
-  flex-wrap: wrap;
-}
-
-/* scroll progress */
-.scroll-progress{
-  position: fixed;
-  top: 0;
-  left: 0;
-  height: 3px;
-  width: 0%;
-  background: linear-gradient(135deg, var(--brand), var(--brand2));
-  z-index: 100;
-}
-
-/* to top */
-.to-top{
-  position: fixed;
-  right: 16px;
-  bottom: 16px;
-  width: 48px;
-  height: 48px;
-  border-radius: 16px;
-  border: 1px solid var(--line);
-  background: var(--card);
-  color: var(--text);
-  box-shadow: var(--shadow);
-  cursor:pointer;
-  display:none;
-}
-.to-top.show{ display:block; }
-
-/* modal */
-.modal{
-  position: fixed;
-  inset: 0;
-  display:none;
-  z-index: 200;
-}
-.modal.show{ display:block; }
-.modal-backdrop{
-  position:absolute;
-  inset:0;
-  background: rgba(0,0,0,.55);
-}
-.modal-content{
-  position: relative;
-  margin: 6vh auto;
-  width: min(900px, 92vw);
-  border-radius: 18px;
-  overflow:hidden;
-  border: 1px solid rgba(255,255,255,.12);
-  background: var(--bg);
-  box-shadow: 0 30px 90px rgba(0,0,0,.45);
-}
-.modal-content img{
-  width:100%;
-  height: auto;
-  display:block;
-  max-height: 80vh;
-  object-fit: contain;
-}
-.modal-close{
-  position:absolute;
-  top: 10px;
-  right: 10px;
-}
-
-/* reveal animations */
-.reveal{
-  opacity: 0;
-  transform: translateY(14px);
-  transition: opacity .6s ease, transform .6s ease;
-}
-.reveal.show{
-  opacity: 1;
-  transform: translateY(0);
-}
-
-/* responsive */
-@media (max-width: 980px){
-  .hero-content{ grid-template-columns: 1fr; }
-  .hero-image{ height: 340px; }
-  .schedule-grid, .stats-grid, .progress-grid, .alumni-grid, .feature-grid, .contacts-grid{
-    grid-template-columns: 1fr;
-  }
-  .gallery-grid{ grid-template-columns: repeat(2, 1fr); }
-  .nav-links{ display:none; } /* чтобы меню не ломалось на мобиле */
-}
-
-@media (max-width: 520px){
-  .gallery-grid{ grid-template-columns: 1fr; }
-}
+const root = document.documentElement;
+const themeToggle = document.getElementById('themeToggle');
+const savedTheme = localStorage.getItem('school-theme');
+if (savedTheme) root.setAttribute('data-theme', savedTheme);
+
+function refreshThemeButton() {
+  if (!themeToggle) return;
+  const dark = root.getAttribute('data-theme') === 'dark';
+  themeToggle.querySelector('span').textContent = dark ? 'Светлая' : 'Тёмная';
+  themeToggle.querySelector('i').className = dark ? 'ti ti-sun-high' : 'ti ti-moon-stars';
+}
+
+if (themeToggle) {
+  refreshThemeButton();
+  themeToggle.addEventListener('click', () => {
+    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
+    root.setAttribute('data-theme', next);
+    localStorage.setItem('school-theme', next);
+    refreshThemeButton();
+  });
+}
+
+// Плавная навигация между страницами
+const fadeLayer = document.getElementById('pageFade');
+document.querySelectorAll('a[href$=".html"]').forEach((link) => {
+  link.addEventListener('click', (event) => {
+    const href = link.getAttribute('href');
+    if (!href) return;
+    event.preventDefault();
+    fadeLayer?.classList.add('visible');
+    setTimeout(() => {
+      window.location.href = href;
+    }, 180);
+  });
+});
+
+// Анимация чисел
+const counters = document.querySelectorAll('[data-count]');
+if (counters.length) {
+  const animateCounter = (el) => {
+    const target = Number(el.dataset.count || '0');
+    let current = 0;
+    const step = Math.max(1, Math.ceil(target / 35));
+    const timer = setInterval(() => {
+      current += step;
+      if (current >= target) {
+        current = target;
+        clearInterval(timer);
+      }
+      el.textContent = String(current) + (target === 97 ? '%' : '');
+    }, 28);
+  };
+
+  const observer = new IntersectionObserver((entries) => {
+    entries.forEach((entry) => {
+      if (entry.isIntersecting) {
+        counters.forEach(animateCounter);
+        observer.disconnect();
+      }
+    });
+  }, { threshold: 0.3 });
+
+  const firstCounter = counters[0];
+  if (firstCounter) observer.observe(firstCounter);
+}
+
+// Генерация карточек учителей
+const teachersGrid = document.getElementById('teachersGrid');
+if (teachersGrid) {
+  const teachers = [
+    ['Алина Дмитриева', 'Математика', 12], ['Ирина Орлова', 'Русский язык', 18], ['Илья Новиков', 'Информатика', 9],
+    ['Ольга Баранова', 'История', 15], ['Сергей Григорьев', 'Физика', 13], ['Анна Беляева', 'Английский язык', 11],
+    ['Марина Ефимова', 'Биология', 10], ['Павел Громов', 'Химия', 14], ['Екатерина Соколова', 'Литература', 16],
+    ['Виктория Лапина', 'География', 8], ['Денис Крылов', 'Обществознание', 7], ['Мария Савина', 'Начальные классы', 20],
+    ['Алексей Фомин', 'Физкультура', 9], ['Наталья Гусева', 'Музыка', 17], ['Юлия Виноградова', 'ИЗО', 6],
+    ['Роман Платонов', 'Технология', 12], ['Светлана Левина', 'Немецкий язык', 10], ['Татьяна Шилова', 'Психолог', 14]
+  ];
+
+  teachers.forEach(([name, subject, exp], idx) => {
+    const card = document.createElement('article');
+    card.className = 'card';
+    card.innerHTML = `
+      <img src="https://picsum.photos/seed/school-teacher-${idx + 1}/800/520" alt="${name}" loading="lazy" />
+      <h3><i class="ti ti-user"></i>${name}</h3>
+      <p>${subject}</p>
+      <p>Стаж: ${exp} лет</p>
+      <a class="btn" href="contacts.html"><i class="ti ti-message"></i>Записаться к учителю</a>
+    `;
+    teachersGrid.append(card);
+  });
+}
+
+// Расписание классов 1–11
+const classScheduleGrid = document.getElementById('classScheduleGrid');
+if (classScheduleGrid) {
+  const lessonPool = ['Математика', 'Русский язык', 'Литература', 'Английский', 'История', 'Биология', 'Информатика', 'Физика', 'Химия', 'География', 'Физкультура'];
+  for (let grade = 1; grade <= 11; grade++) {
+    const card = document.createElement('article');
+    card.className = 'card';
+    const rows = Array.from({ length: 7 }, (_, i) => {
+      const subject = lessonPool[(grade + i) % lessonPool.length];
+      return `<tr><td>${i + 1} урок</td><td>${subject}</td></tr>`;
+    }).join('');
+
+    card.innerHTML = `
+      <h3><i class="ti ti-school"></i>${grade} класс</h3>
+      <table class="schedule-table">
+        <tr><th>Урок</th><th>Предмет</th></tr>
+        ${rows}
+      </table>
+    `;
+    classScheduleGrid.append(card);
+  }
+}
+
+// Календарь на 2025 и 2026 годы
+const calendarGrid = document.getElementById('calendarGrid');
+if (calendarGrid) {
+  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
+  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
+
+  function renderMonth(year, monthIndex) {
+    const first = new Date(year, monthIndex, 1);
+    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
+    const offset = (first.getDay() + 6) % 7;
+
+    let html = `<div class="month"><h4>${monthNames[monthIndex]} ${year}</h4><table><tr>${weekDays.map((d) => `<th>${d}</th>`).join('')}</tr><tr>`;
+    for (let i = 0; i < offset; i++) html += '<td></td>';
+
+    for (let day = 1; day <= daysInMonth; day++) {
+      html += `<td class="day">${day}</td>`;
+      if ((offset + day) % 7 === 0 && day !== daysInMonth) html += '</tr><tr>';
+    }
+
+    html += '</tr></table></div>';
+    return html;
+  }
+
+  let output = '';
+  [2025, 2026].forEach((year) => {
+    for (let m = 0; m < 12; m++) output += renderMonth(year, m);
+  });
+  calendarGrid.innerHTML = output;
+}
