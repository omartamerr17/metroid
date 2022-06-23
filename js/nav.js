

var allPage = document.querySelector('.all-page')
var dark = document.querySelectorAll('.dark-light')
var sun = document.querySelector('.fa-sun')
var moon = document.querySelector('.fa-moon')

dark.forEach(function(dark) {

    dark.addEventListener('click', function () {
    
    allPage.classList.toggle('light')
    allPage.classList.toggle('dark')

    sun.classList.toggle('hide')
    moon.classList.toggle('hide')
    
    })
    
})




