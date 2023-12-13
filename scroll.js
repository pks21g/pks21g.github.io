
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