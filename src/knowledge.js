const knowledge = () => {
  const knowledgeModule = document.getElementById('knowledge-module');
  knowledgeModule.innerHTML = (`
    <h1>Knowledge module</h1>
    <p>
        I have been concerned to learn for the ground. That is, learning the main concepts of 
        the language to know what is under the hood. No matter what framework or library is in 
        the mainstream, knowing the language itself can be help you to understand better and faster 
        the tecnologies that have been built base on Javascript.
    </p>
  `);
  return knowledgeModule;
};

export default knowledge;