const navSlide = () => {

    const worldIcon = document.querySelector('.icon');
    const languages = document.querySelector('.flags');





    //Toggle Flags
    worldIcon.addEventListener('click', () => {
        languages.classList.toggle('lang-flag-active');
    });
}

navSlide();