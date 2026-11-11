// Розділ «Про мене»
function About() {
  return (
    <section id="about" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md md:col-span-2">
      <h2 className="mb-3 text-xl font-bold text-brand-600">Про мене</h2>
      <p className="leading-relaxed text-slate-700">
        Студент групи <strong className="text-slate-900">КБ-209</strong> Національного університету
        «Львівська політехніка». Цікавлюся{' '}
        <em className="rounded bg-amber-100 px-1 not-italic text-amber-900">інформаційною безпекою</em>,
        базами даних та вебтехнологіями. Шукаю можливість отримати практичний
        досвід у сфері ІТ та кібербезпеки.
      </p>
    </section>
  );
}

export default About;
