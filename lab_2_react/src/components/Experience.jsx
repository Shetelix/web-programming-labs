// Розділ «Досвід»: список проєктів приходить через props
// і виводиться методом map(). Атрибут key потрібен React для ідентифікації елементів.
function Experience({ projects }) {
  return (
    <section id="experience" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold text-brand-600">Досвід (навчальні проєкти)</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-r-xl border-l-4 border-brand-500 bg-brand-50 p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <h3 className="font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{project.description}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 marker:text-brand-500">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
