
const arrow = document.getElementById('arrow');

window.onscroll = function() { scrollFunction()};

const scrollFunction = () =>{
    if (document.body.scrollTop > 20 || document.documentElement < 20)
        arrow.style.display = 'block';
    else
        arrow.style.display = 'none';
}

arrow.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

   
function handleClick(e) {
    var elmnt = document.getElementById(e);
    elmnt.scrollIntoView({
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
    });
  }