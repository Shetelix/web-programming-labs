import { useEffect, useState } from 'react';

const STORAGE_KEYS = ['userAgent', 'platform', 'language', 'screen'];

// Підвал: контакти, копірайт і системна інформація з localStorage
function Footer({ github, city, owner, year }) {
  const [systemInfo, setSystemInfo] = useState({});

  useEffect(() => {
    // 1) зчитуємо дані браузера та ОС при монтуванні
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);
    localStorage.setItem('language', navigator.language);
    localStorage.setItem('screen', `${window.screen.width}×${window.screen.height}`);

    // 2) отримуємо їх назад із localStorage і кладемо у стан
    const saved = Object.fromEntries(STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)]));
    setSystemInfo(saved);
  }, []);

  return (
    <footer id="contacts" className="bg-slate-900 text-slate-300 dark:bg-black">
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

        <div className="mt-6 rounded-xl border border-slate-700 p-4">
          <h3 className="mb-2 font-semibold text-white">Системна інформація (localStorage)</h3>
          <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 text-sm">
            {Object.entries(systemInfo).map(([key, value]) => (
              <div key={key} className="contents">
                <dt className="font-medium text-blue-300">{key}</dt>
                <dd className="break-all">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          &copy; {year} {owner}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
