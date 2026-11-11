// Підвал: контакти та копірайт
function Footer({ github, city, owner, year }) {
  return (
    <footer id="contacts" className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="mb-3 text-xl font-bold text-white">Контакти</h2>
        <address className="space-y-1 not-italic">
          <p>
            GitHub:{' '}
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener"
              className="text-blue-300 hover:text-white hover:underline"
            >
              {github}
            </a>
          </p>
          <p>Місто: {city}</p>
        </address>
        <p className="mt-6 text-xs text-slate-500">
          &copy; {year} {owner}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
