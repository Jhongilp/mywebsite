// import about from './about';
// import knowledgeModule from './knowledge';
// import projects from './projects';

window.onload = () => {
  initialize();
  displayListAbout();
};

function initialize() {
  mainNav();
}

const mainNav = () => {
  const mainNav = document.getElementById('main-nav');
  const profileImg = document.getElementById('profile-img');
  const highlightDiv = document.getElementById('upper-highlight');
  const support = document.getElementById('upper-support');
  const links = document.querySelectorAll('.main-nav > li');
  
  links.forEach( link => {
    link.addEventListener('click', () => {
      activateLink(links, link);
      // showModule(link.id);
      rollView(360);
    });
  });
  
  window.onscroll = () => {
    
    // Control the size of the profile image. Disapper/appear on scroll
    if (window.pageYOffset <= 52) {
      profileImg.style.setProperty("--imgSize", 100 - window.pageYOffset + 'px');
      profileImg.style.setProperty("--opacity", 1 - (window.pageYOffset*2/100));  
    }
    // Control the fixed div upper on the screen
    if(window.pageYOffset > 50) {
      highlightDiv.classList.add('upper-hl-fixed');
      support.classList.remove('upper-support');
    }
    else {
      highlightDiv.classList.remove('upper-hl-fixed');
      support.classList.add('upper-support');
    }
    // Control the mainNav to get fixed in the upper screen
    // The header has a height of 290px + 110px of 'upper-support div' = 400px
    // When the upper div inside header has the class 'upper-hl-fixed' it gets 60px fixed
    // So 400 - 60 = 340px
    if(window.pageYOffset > 340) {
      mainNav.classList.add('main-nav-scrolled');
    }
    else {
      mainNav.classList.remove('main-nav-scrolled');
    }
  };
}



function activateLink(nav, linkClicked) {
  // Iterate through the links of the main nav (about, knowledge and projects)
  nav.forEach( link => {
    // There are three modules: about, knowledge and projects
    // Each one to be displayed in main node of the DOM through adding or removing css classes
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
  // The module 'about' has a list of three subtitles: EXPERIENCE, EDUCATION, MORE
  // these subtitles have the class 'header-list' and 
  // can be toogle by the user, initially they have a height of 50px
  const listMoreAbout = document.querySelectorAll('.header-list');
  listMoreAbout.forEach( section => {
    section.addEventListener('click', () => {
      listMoreAbout.forEach( node => {
        /*
        There are two loops through the same nodes (div elements with the class 'header-list')
        The first loop just add a click event listener
        The second loop is used to toogle the classes to display the info according to the element
        that has been selected.
        */ 
        
        // Get the id of the element clicked and split the last word. Ex: education in 'about-education'
        // This word is used to get the some inner elements
        const sectionId = node.id.split('-')[1];
        const arrow = document.getElementById(`arrow-header-${sectionId}`);
        const experienceDiv = document.getElementById(`about-${sectionId}`);
        const rolldownDiv = document.getElementById(`rolldown-${sectionId}`);
        
        // rollView(400);
        experienceDiv.style.setProperty('height', '50px');
        // node and section are part of the same array of elements that have the class 'header-list'
        // node is the element of the inner loop that is iterated every time the section element is clicked
        if (node !== section) {
          window.setTimeout(() => {
            experienceDiv.classList.remove('showroll');
            arrow.classList.remove('up');
            rolldownDiv.classList.remove('display-showroll');
          }, 300);
          // experienceDiv.classList.remove('showroll');
          // arrow.classList.remove('up');
          // rolldownDiv.classList.remove('display-showroll');
        }
        else {
          experienceDiv.classList.toggle('showroll');
          arrow.classList.toggle('up');
          rolldownDiv.classList.toggle('display-showroll');
          const classes = experienceDiv.className;
          if (classes.includes('showroll')) {
            experienceDiv.style.setProperty('height', (rolldownDiv.offsetHeight + 60 ) + 'px');
          }
          window.setTimeout(() => {
            if (sectionId === 'experience') {
              // rollView(550);
              // rollView(550);
            }
            else if(sectionId === 'education') {
              // rollView(605);
              rollView(400);
            }
            else {
              // rollView(655);
              rollView(400);
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