// Розділ «Про мене»
function About() {
  return (
    <section id="about" className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800 shadow-md md:col-span-2">
      <h2 className="mb-3 text-xl font-bold text-brand-600 dark:text-blue-300">Про мене</h2>
      <p className="leading-relaxed text-slate-700 dark:text-slate-300">
        Студент групи <strong className="text-slate-900 dark:text-white">КБ-209</strong> Національного університету
        «Львівська політехніка». Цікавлюся{' '}
        <em className="rounded bg-amber-100 px-1 not-italic text-amber-900 dark:bg-amber-900 dark:text-amber-100">інформаційною безпекою</em>,
        базами даних та вебтехнологіями. Шукаю можливість отримати практичний
        досвід у сфері ІТ та кібербезпеки.
      </p>
    </section>
  );
}

export default About;
