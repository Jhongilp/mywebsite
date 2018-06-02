window.onload = () => {
  initialize();
};

function initialize() {
  const mainNav = document.getElementById('main-nav');
  const profileImg = document.getElementById('profile-img');
  const highlightDiv = document.getElementById('upper-highlight');
  const support = document.getElementById('upper-support');
  const links = document.querySelectorAll('.main-nav > li');
  
  links.forEach( link => {
    link.addEventListener('click', () => {
      // console.log(link.id, link);
      activateLink(links, link);
      showModule(link.id);
      rollView();
    });
  });
  
  window.onscroll = () => {
    if (window.pageYOffset <= 52) {
      profileImg.style.setProperty("--imgSize", 100 - window.pageYOffset + 'px');
      profileImg.style.setProperty("--opacity", 1 - (window.pageYOffset*2/100));  
    }
    
    if(window.pageYOffset > 50) {
      highlightDiv.classList.add('upper-hl-fixed');
      support.classList.remove('upper-support');
      
    }
    else {
      highlightDiv.classList.remove('upper-hl-fixed');
      support.classList.add('upper-support');
    }
    
    if(window.pageYOffset > 340) {
      mainNav.classList.add('main-nav-scrolled');
    }
    else {
      mainNav.classList.remove('main-nav-scrolled');
    }
    console.log(window.pageYOffset);
  };
}

function activateLink(nav, linkClicked) {
  nav.forEach( link => {
    if (link != linkClicked) {
      link.classList.remove('active');
    } else {
      link.classList.add('active');
    }
  });
}

function rollView() {
  window.scrollTo({
    top: 400,
    behavior: "smooth"
  });
}

function showModule(moduleName) {
  console.log(moduleName);
  const modules = {
    about: about(),
    knowledge: knowledge(),
    projects: projects()
  };
  const main = document.getElementById('main');
  main.innerHTML = modules[moduleName];
  // main.appendChild(module);
}

// Modules views

const about = () => (
    `<div class='module-container'>
    <p>
      Currently I am making a career change from Foreign Trade major while working as export advisor 
      and studying Informatics Engineering. Despite the duties and responsibilities of these activities, 
      I have managed to study and learn to reinforce my expertise in programming. 
      I am looking forward to doing programming full time.
    </p>
    <p>
      Even though I have no programming job experience, I have solid knowledge programming and 7 years 
      of working experience in Foreign Trade that have cultivated abilities of team work, 
      communication and understanding customer’s need.
    </p>
    <ul class='about-details'>
      <li>EXPERIENCE</li>
      <li>EDUCATION</li>
      <li>MORE INFO</li>
    </ul>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>.</p>
  </div>`
);

const knowledge = () => (
  `<div>
    <h2>Knoledge module</h2>
  </div>`
);

const projects = () => (
  `<div>
    <h2>Projects module</h2>
  </div>`
);