import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

// Дані резюме зберігаються окремо від розмітки
const links = [
  { href: '#about', label: 'Про мене' },
  { href: '#education', label: 'Освіта' },
  { href: '#experience', label: 'Досвід' },
  { href: '#skills', label: 'Навички' },
  { href: '#contacts', label: 'Контакти' },
];

const projects = [
  {
    title: 'Інтернет-безпека та робота браузера',
    description: 'Аналіз завантаження сайту python.org у Firefox Developer Tools.',
    points: [
      'вивчив запити та статус-коди у вкладці Network;',
      'проаналізував DNS, TCP, TLS та час відповіді сервера;',
      'перевірив сертифікат, версію TLS, заголовки та cookie.',
    ],
  },
  {
    title: 'Проєктування бази даних «Агенція перепису населення»',
    description: 'Концептуальне проєктування реляційної БД.',
    points: [
      'побудував універсальне відношення та знайшов аномалії;',
      'визначив функціональні залежності та можливі ключі;',
      'виконав декомпозицію до нормальної форми Бойса–Кодда (шість відношень).',
    ],
  },
  {
    title: 'Створення реляційної бази даних у MySQL',
    description: 'Реалізація спроєктованої БД засобами SQL.',
    points: [
      'створив таблиці з первинними та зовнішніми ключами;',
      'написав скрипти для внесення тестових даних і вибірки;',
      'перевірив цілісність даних через обмеження FOREIGN KEY.',
    ],
  },
];

const skills = [
  'SQL та MySQL',
  'HTML (семантична розмітка)',
  'CSS та Tailwind CSS',
  'React (компоненти, props)',
  'Python (CLI-застосунки, FastAPI, SQLite)',
  'Git (локальний репозиторій, коміти, GitHub)',
  'Основи інтернет-безпеки та приватності',
];

function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <Header
        name="Шетеля Дмитро Максимович"
        title="Студент спеціальності 125 «Кібербезпека та захист інформації»"
        links={links}
      />
      <main className="mx-auto grid max-w-5xl gap-6 px-6 py-10 md:grid-cols-2 md:items-start">
        <About />
        <Experience projects={projects} />
        <Education />
        <Skills skills={skills} />
      </main>
      <Footer
        github="github.com/Shetelix"
        city="Львів"
        owner="Шетеля Дмитро Максимович"
        year={2026}
      />
    </div>
  );
}

export default App;
