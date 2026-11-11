import { useEffect, useState } from 'react';
import { FORMSPREE_ENDPOINT, MODAL_DELAY_MS } from '../config';

const SHOWN_KEY = 'feedbackShown';

// Модальне вікно з формою зворотного зв'язку.
// Відкривається через 1 хвилину після входу на сайт (setTimeout у useEffect).
function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // якщо користувач уже закривав вікно в цій сесії — не показуємо повторно
    if (sessionStorage.getItem(SHOWN_KEY) === 'true') return;

    const timerId = setTimeout(() => setIsOpen(true), MODAL_DELAY_MS);
    return () => clearTimeout(timerId); // прибираємо таймер при демонтуванні
  }, []);

  function close() {
    setIsOpen(false);
    sessionStorage.setItem(SHOWN_KEY, 'true');
  }

  const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-transparent focus:ring-2 focus:ring-brand-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100';

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4"
        onClick={(event) => event.target === event.currentTarget && close()}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-800"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Закрити"
            className="absolute right-4 top-3 text-2xl text-slate-400 hover:text-slate-700 dark:hover:text-white"
          >
            &times;
          </button>
          <h2 id="contact-title" className="text-xl font-bold text-brand-600 dark:text-blue-300">
            Зворотний зв'язок
          </h2>
          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
            Залиште повідомлення — я отримаю його на e-mail.
          </p>

          <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
            <label className="block text-sm font-medium dark:text-slate-200">
              Ім'я
              <input type="text" name="name" required placeholder="Ваше ім'я" className={`mt-1 ${inputClass}`} />
            </label>
            <label className="block text-sm font-medium dark:text-slate-200">
              Email
              <input type="email" name="email" required placeholder="name@example.com" className={`mt-1 ${inputClass}`} />
            </label>
            <label className="block text-sm font-medium dark:text-slate-200">
              Номер телефону
              <input
                type="tel"
                name="phone"
                required
                pattern="[+0-9 ()\-]{10,20}"
                placeholder="+380 XX XXX XX XX"
                className={`mt-1 ${inputClass}`}
              />
            </label>
            <label className="block text-sm font-medium dark:text-slate-200">
              Повідомлення
              <textarea name="message" rows="4" required placeholder="Ваше повідомлення" className={`mt-1 ${inputClass}`} />
            </label>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 rounded-lg bg-brand-600 py-2 font-semibold text-white transition hover:bg-brand-500"
              >
                Надіслати
              </button>
              <button
                type="button"
                onClick={close}
                className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                Закрити
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default ContactForm;
