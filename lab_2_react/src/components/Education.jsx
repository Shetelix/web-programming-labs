// Розділ «Освіта»
function Education() {
  return (
    <section id="education" className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800 shadow-md">
      <h2 className="mb-4 text-xl font-bold text-brand-600 dark:text-blue-300">Освіта</h2>
      <div className="space-y-4">
        <article className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">Національний університет «Львівська політехніка»</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Кафедра «Захист інформації», спеціальність 125 «Кібербезпека та
            захист інформації»
          </p>
        </article>
        <article className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">Онлайн-курс на платформі Prometheus</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            «Безпека в Інтернеті під час війни: практичний курс» – 15 годин, 0,5
            кредитів ЄКТС, сертифікат від 01.10.2026.
          </p>
          <a
            href="https://prometheus.org.ua"
            target="_blank"
            rel="noopener"
            className="mt-2 inline-block text-sm font-medium text-brand-600 dark:text-blue-300 underline-offset-4 hover:underline"
          >
            prometheus.org.ua ↗
          </a>
        </article>
      </div>
    </section>
  );
}

export default Education;
