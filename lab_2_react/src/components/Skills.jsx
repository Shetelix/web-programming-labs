// Розділ «Навички»
function Skills({ skills }) {
  return (
    <section id="skills" className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800 shadow-md md:col-span-2">
      <h2 className="mb-4 text-xl font-bold text-brand-600 dark:text-blue-300">Навички</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-brand-500/30 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-900 transition dark:bg-slate-900 dark:text-blue-200 hover:bg-brand-600 hover:text-white"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
