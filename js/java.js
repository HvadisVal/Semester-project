const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const worldIcon = document.querySelector('.language-selector');
  const languages = document.querySelector('.lang-flag');
  

  //Toggle Flags
  worldIcon.addEventListener('click', () =>{
    languages.classList.toggle('lang-flag-active');
  });
}

navSlide();