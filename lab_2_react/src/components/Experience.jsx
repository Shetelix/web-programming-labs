// Розділ «Досвід»: список проєктів приходить через props
// і виводиться методом map(). Атрибут key потрібен React для ідентифікації елементів.
function Experience({ projects }) {
  return (
    <section id="experience">
      <h2>Досвід (навчальні проєкти)</h2>
      {projects.map((project) => (
        <article key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Experience;
