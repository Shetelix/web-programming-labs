// Підвал: контакти та копірайт
function Footer({ github, city, owner, year }) {
  return (
    <footer id="contacts">
      <h2>Контакти</h2>
      <address>
        <p>
          GitHub:{' '}
          <a href={`https://${github}`} target="_blank" rel="noopener">
            {github}
          </a>
        </p>
        <p>Місто: {city}</p>
      </address>
      <p>
        <small>&copy; {year} {owner}</small>
      </p>
    </footer>
  );
}

export default Footer;
