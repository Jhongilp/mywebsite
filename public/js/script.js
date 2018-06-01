

window.onload = () => {
  console.log(document.documentElement);
  const mainNav = document.getElementById('main-nav');
  const profileImg = document.getElementById('profile-img');
  const highlightDiv = document.getElementById('upper-highlight');
  const support = document.getElementById('upper-support');
  const aboutBtn = document.getElementById('about');
  const links = document.querySelectorAll('.main-nav > li');
  
  links.forEach( link => {
    link.addEventListener('click', () => {
      // link.classList.toggle('active');
      activateLink(links, link);
    });
  })
  
  aboutBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 400,
      behavior: "smooth"
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
};

function activateLink(nav, linkClicked) {
  nav.forEach( link => {
    if (link != linkClicked) {
      link.classList.remove('active');
    } else {
      link.classList.add('active');
    }
    // console.log(link + " --> " + linkClicked + " es: " + (link === linkClicked) );
    // console.log(link.innerContent);
  });
}



