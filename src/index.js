import './styles/main.css'


document.querySelector('.menuTitle').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.querySelector('ul').classList.toggle("visible");
      }  
    })
    
    window.addEventListener("click", (e) => {
      if (!document.querySelector('nav').contains(e.target)) {
        document.querySelector('ul').classList.remove("visible")
      }
})


document.querySelector('.aboutButton').addEventListener('click', ()=>{

  document.querySelector('.projects').style.display = 'none'
  document.querySelector('.contact').style.display = 'none'
    document.querySelector('.about').style.display = 'flex'
})


document.querySelector('.projectsButton').addEventListener('click', ()=>{

  document.querySelector('.contact').style.display = 'none'
  document.querySelector('.about').style.display = 'none'
  document.querySelector('.projects').style.display = 'flex'
})


document.querySelector('.contactButton').addEventListener('click', ()=>{

  document.querySelector('.projects').style.display = 'none'
  document.querySelector('.about').style.display = 'none'
  document.querySelector('.contact').style.display = 'flex'
})