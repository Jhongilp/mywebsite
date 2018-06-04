function createList(name) {
  const li = document.createElement('li');
  li.setAttribute('id', name);
  li.textContent = name;
  li.addEventListener('click', () => {
    console.log(name);
    showExperience();
  });
  return li;
}

function showExperience() {
  const div = document.createElement('div')
  
}

const about = () => {
  const aboutModule = document.createElement('div');
  aboutModule.setAttribute('class', 'module-container');
  aboutModule.innerHTML = `<p>
      Currently I am making a career change from Foreign Trade major while working as export advisor 
      and studying Informatics Engineering. Despite the duties and responsibilities of these activities, 
      I have managed to study and learn to reinforce my expertise in programming. 
      I am looking forward to doing programming full time.
    </p>
    <p>
      Even though I have no programming job experience, I have solid knowledge programming and 8 years 
      of working experience in Foreign Trade that have cultivated abilities of team work, 
      communication and understanding customer’s need.
    </p>`;
    
  const ul = document.createElement('ul');
  
  ul.appendChild(createList('experience'));
  ul.appendChild(createList('education'));
  ul.appendChild(createList('moreInfo'));
  aboutModule.appendChild(ul);  
  return aboutModule;
};

    // <div class'about-deatils experience'>
    //   <p>
    //     During 3 years and half I have been giving advice to companies that want to create a department of
    //     foreign trade or want to identify ways to reduce costs in their logitic supply chain.
    //   </p>
    //   <a>See more</a>
    // </div>

export default about;