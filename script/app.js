const navbar = document.getElementById(`my-navbar`);

window.addEventListener(`scroll`, () => {
    if(window.pageYOffset > 100){
        navbar.classList.add(`active`);
    }
    else{
        navbar.classList.remove(`active`);
    }
})