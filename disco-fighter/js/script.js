import countryList from "./countryList.mjs";
import tours_2023 from "./tours_2023.mjs";

let list = document.getElementById("country-list");

countryList.forEach((country) => {
  let option = document.createElement("option");
  option.innerHTML = country;
  list.appendChild(option);
});

const tour = document.getElementById("tour");
tours_2023.forEach((t) => {
  const span = document.createElement("span");
  span.innerHTML = t.date + " " + " " + t.venue + t.city + t.country + "\n";
  tour.appendChild(span);
});

