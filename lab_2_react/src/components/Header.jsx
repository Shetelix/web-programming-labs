// Шапка резюме: ім'я, спеціальність і навігація.
// Дані приходять від батьківського компонента через props.
function Header({ name, title, links }) {
  return (
    <header className="bg-gradient-to-r from-brand-900 via-brand-600 to-brand-500 text-white shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{name}</h1>
          <p className="mt-2 text-lg text-blue-100">{title}</p>
        </div>
        <nav>
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
