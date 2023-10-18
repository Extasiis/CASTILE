const navegation = document.querySelector('.navegation');
const close = document.querySelector('.close')

navegation.onclick = function(){
    navegation.classList.add('active');
    close.style.zIndex = "3";
}

close.onclick = function(){
    navegation.classList.remove('active')
    close.style.zIndex = "1"
}