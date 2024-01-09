

let isScrolling;
const arrow = document.getElementById('arrow');

window.addEventListener('scroll', () =>{
  window.clearTimeout(isScrolling)
  isScrolling = setTimeout(() =>{
    arrow.style.display ='block'
  }, 500)
},false)

const scrollFunction = () =>{
  if(window.scrollY || window.scrollX){
    arrow.style.display = 'none'
  }
  else {
    arrow.style.display = 'block'
  }
}
const homeScroll = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = scrollFunction;
const scrollToTop = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
arrow.addEventListener('click', scrollToTop())
arrow.removeEventListener('click', scrollToTop())

function handleClick(e) {
    var elmnt = document.getElementById(e);
    elmnt.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
  }

let form_input = document.getElementById('input_form');
form_input.addEventListener('submit', (e) => {

    const success= document.getElementsById('success');
    const danger = document.getElementsById('danger')
    const name = document.getElementsByName('name').value;
    const email = document.getElementsByName('email').value;
    const message = document.getElementsByName('message').value;
    console.log(`name ${name} and email ${email} and message ${message}`)
    e.preventDefault();

    if(name === "" || email === "" || message == ""){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            name.value = "";
            email.value='';
            message.value='';}, 2000);
            success.style.display = 'block';
        }
    }
 )

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active" );
  navMenu.classList.toggle("active");
});


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


const theme = localStorage.getItem('theme')
theme && document.body.classList.add(theme)
const themeToggleBtn = document.querySelector('.theme-toggle')
themeToggleBtn.addEventListener('click', () =>{
  document.body.classList.toggle('dark-mode')
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('theme', 'dark-mode')
  }
  else{
    localStorage.removeItem('theme');
  }
})