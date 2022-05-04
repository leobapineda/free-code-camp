const menuButton = document.querySelector('#boton-menu')
const contenedor =  document.querySelector('#contenedor')


menuButton.addEventListener('click', () =>  {
    contenedor.classList.toggle('active')
})