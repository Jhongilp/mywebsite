// import about from './about';

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
      activateLink(links, link);
      // showModule(link.id);
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
  };
}

function activateLink(nav, linkClicked) {
  nav.forEach( link => {
    let module = document.getElementById(`${link.id}-module`);
    console.log(module);
    if (link != linkClicked) {
      link.classList.remove('active');
      module.classList.remove('show-module');
      module.classList.add('module-hidden');
    } else {
      link.classList.add('active');
      module.classList.remove('module-hidden');
      module.classList.add('show-module');
    }
  });
}

function rollView() {
  window.scrollTo({
    top: 400,
    behavior: "smooth"
  });
}

// function showModule(moduleName) {
//   const modules = {
//     about: about(),
//     knowledge: knowledge(),
//     projects: projects()
//   };
//   const main = document.getElementById('main');
//   // main.innerHTML = modules[moduleName];
//   main.appendChild(modules[moduleName]);
// }

// Modules views

// const knowledge = () => (
//   `<div>
//     <h2>Knoledge module</h2>
//   </div>`
// );

// const projects = () => (
//   `<div>
//     <h2>Projects module</h2>
//   </div>`
// );