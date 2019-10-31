

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});


// Scroll
const proyectsTittle = document.querySelector('.proyects-tittle');

document.addEventListener('scroll', ()=>{
let scrollY = window.scrollY + (window.innerHeight / 3);	
   scrollY >= proyectsTittle.offsetTop ? proyectsTittle.classList.add('anim-typewriter') : false;
})

const lineOne = document.querySelector('.line-1');

document.addEventListener('scroll', ()=>{
let scrollY = window.scrollY + (window.innerHeight / 3);	
   scrollY >= lineOne.offsetTop ? lineOne.classList.add('anim-typewriter') : false;
})
// OffsetTop mide la posición de arriba a abajo del elemento con respecto al documento
// innerHeight mide la altura de la pantalla
// scrollY es una propiedad para detectar la posición vertical de la ventana del navegador donde etamos visualizando la página
