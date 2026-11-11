// Розділ «Навички»
function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Навички</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
