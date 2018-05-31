window.onload = () => {
  const mainNav = document.getElementById('main-nav');
  console.log(mainNav);
  window.onscroll = () => {

    if(window.pageYOffset > 400) {
      mainNav.classList.add('main-nav-scrolled');
    }
    else {
      mainNav.classList.remove('main-nav-scrolled');
    }
    console.log(window.pageYOffset);
  };
};