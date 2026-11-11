// Шапка резюме: ім'я, спеціальність і навігація.
// Дані приходять від батьківського компонента через props.
function Header({ name, title, links }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{title}</p>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
