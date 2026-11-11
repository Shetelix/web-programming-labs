// Розділ «Навички»
function Skills({ skills }) {
  return (
    <section id="skills" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md md:col-span-2">
      <h2 className="mb-4 text-xl font-bold text-brand-600">Навички</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-brand-500/30 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-900 transition hover:bg-brand-600 hover:text-white"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
