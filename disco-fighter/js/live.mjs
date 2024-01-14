import tours_2023 from "./tours_2023.mjs";
let year = new Date().getFullYear();
let startingYear = 2017;

const d = document.getElementById("dates");
for (let i = year; i >= startingYear; i--) {
  const option = document.createElement("option");
  option.className = "option"
  option.value = i;
  option.innerHTML = i;
  d.appendChild(option);
}
const option = document.getElementById('dates')
let ul = document.querySelector('a')
let div = document.querySelector('abc')
option.addEventListener('change', () =>{
  if (option.value === '2022'){
    
  
  tours_2023.forEach((tour) => {
    let ul = document.getElementById('a')
    let li =document.createElement('li')
    li.className = "dates-item"
    li.innerHTML = tour.date + tour.venue + tour.city + tour.country;
    ul.appendChild(li)
    console.log(tour.city)
  })
  }
})



