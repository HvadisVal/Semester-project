const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navTwo = document.querySelector('.nav-two');
  const worldIcon = document.querySelector('.language-selector');
  const languages = document.querySelector('.lang-flag');
  
  //Toggle Navs
  burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
    navTwo.classList.toggle('nav-active');

    //Burger Animation
    burger.classList.toggle('burger-active');
  });

  //Toggle Flags
  worldIcon.addEventListener('click', () =>{
    languages.classList.toggle('lang-flag-active');
  });
}

navSlide();