const projects = () => {
  const projectsModule = document.getElementById('projects-module');
  projectsModule.innerHTML = (`
    <h1>Projects module</h1>
    <ul>
        <li>Vanilla Javascript<li>
        <li>React<li>
        <li>Nodet<li>
    </ul>
  `);
  return projectsModule;
};

export default projects;