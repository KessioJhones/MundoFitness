AOS.init();

const bodyy = document.querySelector(".light-mode");
const light = document.querySelector(".light-theme");

light.addEventListener('click', ()=>{
    bodyy.classList.toggle ('light');
});
