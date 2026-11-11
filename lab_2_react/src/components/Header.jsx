// Шапка резюме: ім'я, спеціальність, навігація та перемикач теми.
// Дані й обробник перемикання приходять від App через props.
function Header({ name, title, links, theme, onToggleTheme }) {
  return (
    <header className="bg-gradient-to-r from-brand-900 via-brand-600 to-brand-500 text-white shadow-lg dark:from-slate-950 dark:via-slate-900 dark:to-brand-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{name}</h1>
          <p className="mt-2 text-lg text-blue-100">{title}</p>
        </div>
        <nav className="flex flex-col items-start gap-3 md:items-end">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/40 transition hover:bg-white/30"
          >
            {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
          </button>
          <ul className="flex flex-wrap gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium transition hover:scale-105 hover:bg-white hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
