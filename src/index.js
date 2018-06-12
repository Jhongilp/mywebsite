// import about from './about';
// import knowledge from './knowledge';
// import projects from './projects';

window.onload = () => {
  initialize();
  displayListAbout();
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
      rollView(400);
    });
  });
  
  window.onscroll = () => {
    // console.log(window.pageYOffset, window.innerHeight);
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

function rollView(num) {
  window.scrollTo({
    top: num,
    behavior: "smooth"
  });
}

function displayListAbout() {
  const listMoreAbout = document.querySelectorAll('.header-list');
  listMoreAbout.forEach( section => {
    section.addEventListener('click', () => {
      listMoreAbout.forEach(node => {
        const sectionId = node.id.split('-')[1];
        const arrow = document.getElementById(`arrow-header-${sectionId}`);
        const experienceDiv = document.getElementById(`about-${sectionId}`);
        const rolldownDiv = document.getElementById(`rolldown-${sectionId}`);
        
        experienceDiv.style.setProperty('height', '50px');
        if (node !== section) {
          experienceDiv.classList.remove('showroll');
          arrow.classList.remove('up');
          rolldownDiv.classList.remove('display-showroll');
        }
        else {
          experienceDiv.classList.toggle('showroll');
          arrow.classList.toggle('up');
          rolldownDiv.classList.toggle('display-showroll');
          const classes = experienceDiv.className;
          console.log(classes, classes.includes('showroll'));
          if (classes.includes('showroll')) {
            experienceDiv.style.setProperty('height', (rolldownDiv.offsetHeight + 60 ) + 'px');
          }
          window.setTimeout(() => {
            if (sectionId === 'experience') {
              rollView(550);
            }
            else if(sectionId === 'education') {
              rollView(605);
            }
            else {
              rollView(655);
            }
          }, 500);
        }
      });
    });
  });
}



// function showModule(moduleName) {
//   const modules = {
//     about: about(),
//     knowledge: knowledge(),
//     projects: projects()
//   };
//   const main = document.getElementById('main');
//   main.appendChild(modules[moduleName]);
// }